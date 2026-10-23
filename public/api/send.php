<?php

/**
 * Consultation form endpoint: POST /api/send.php (JSON body from src/components/ConsultationForm.tsx).
 *
 * 1. Validates the submitted fields and rejects spam (hidden "website" field, per-IP rate limit).
 * 2. Sends the firm a notification with every field (Reply-To: the client).
 * 3. Sends the client a thank-you confirmation (Reply-To: the firm).
 * Responds with {"ok": true} or {"ok": false, "error": "..."}; the browser then opens /thank-you.
 *
 * SMTP credentials come from api/.env (see .env.example).
 */

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/lib/env.php';
require __DIR__ . '/lib/emails.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

$config = load_env(__DIR__ . '/.env');
$debug = strtolower($config['APP_DEBUG'] ?? 'false') === 'true';

foreach (['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_FROM', 'ADMIN_EMAIL'] as $key) {
    if (empty($config[$key])) {
        error_log("Consultation form: missing $key in api/.env");
        respond(500, ['ok' => false, 'error' => $debug ? "Mail is not configured: $key is empty in api/.env." : 'The form is temporarily unavailable. Please contact us on WhatsApp.']);
    }
}

/* ---------------------------------------------------------------- input */

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    $input = $_POST;
}

/** Single-line text: no control characters or line breaks (keeps headers and subjects clean) */
function clean_line($value, int $max): string
{
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', (string) $value);
    return mb_substr(trim(preg_replace('/\s+/u', ' ', $value)), 0, $max);
}

/** Multi-line text: keeps line breaks, removes other control characters */
function clean_text($value, int $max): string
{
    $value = str_replace(["\r\n", "\r"], "\n", (string) $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $value);
    return mb_substr(trim($value), 0, $max);
}

// Hidden field that people never see; bots fill it in. Pretend success so they do not retry.
if (clean_line($input['website'] ?? '', 200) !== '') {
    respond(200, ['ok' => true]);
}

$data = [
    'fullName' => clean_line($input['fullName'] ?? '', 120),
    'email' => clean_line($input['email'] ?? '', 180),
    'countryCode' => clean_line($input['countryCode'] ?? '', 8),
    'phone' => clean_line($input['phone'] ?? '', 40),
    'country' => clean_line($input['country'] ?? '', 80),
    'language' => clean_line($input['language'] ?? '', 60),
    'service' => clean_line($input['service'] ?? '', 160),
    'availability' => clean_line($input['availability'] ?? '', 200),
    'extraLabel' => clean_line($input['extraLabel'] ?? '', 120),
    'extra' => clean_line($input['extra'] ?? '', 200),
    'message' => clean_text($input['message'] ?? '', 5000),
];
$meta = [
    'page' => filter_var(clean_line($input['page'] ?? '', 500), FILTER_VALIDATE_URL) ?: '',
    'pageLabel' => clean_line($input['pageTitle'] ?? '', 160),
    'formTitle' => clean_line($input['formTitle'] ?? '', 120),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
];
$meta['pageLabel'] = $meta['pageLabel'] ?: $meta['page'];

$errors = [];
if (mb_strlen($data['fullName']) < 2) {
    $errors['fullName'] = 'Please enter your full name.';
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}
if (strlen(preg_replace('/\D+/', '', $data['phone'])) < 5) {
    $errors['phone'] = 'Please enter a valid WhatsApp number.';
}
if ($data['service'] === '') {
    $errors['service'] = 'Please select your legal matter.';
}
if ($errors) {
    respond(422, ['ok' => false, 'error' => reset($errors), 'fields' => $errors]);
}

/* ---------------------------------------------------------------- rate limit: 5 requests per IP per 15 minutes */

$bucket = sys_get_temp_dir() . '/caspani-form-' . sha1($meta['ip']) . '.json';
$recent = array_filter(
    is_readable($bucket) ? (json_decode((string) file_get_contents($bucket), true) ?: []) : [],
    static function ($t) { return $t > time() - 900; }
);
if (count($recent) >= 5) {
    respond(429, ['ok' => false, 'error' => 'Too many requests. Please try again in a few minutes or contact us on WhatsApp.']);
}
$recent[] = time();
@file_put_contents($bucket, json_encode(array_values($recent)), LOCK_EX);

/* ---------------------------------------------------------------- send */

$timezone = new DateTimeZone('America/Sao_Paulo');
$meta['submittedAt'] = (new DateTime('now', $timezone))->format('d M Y, H:i') . ' (Brasília time)';

function make_mailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['SMTP_HOST'];
    $mail->Port = (int) ($config['SMTP_PORT'] ?? 587);
    $mail->SMTPAuth = true;
    $mail->Username = $config['SMTP_USER'];
    $mail->Password = str_replace(' ', '', $config['SMTP_PASS']); // Gmail shows app passwords in groups of four
    $mail->SMTPSecure = strtolower($config['SMTP_SECURE'] ?? 'tls') === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Encoding = PHPMailer::ENCODING_BASE64;
    $mail->setFrom($config['MAIL_FROM'], $config['MAIL_FROM_NAME'] ?? 'Caspani Lawyers');
    $mail->isHTML(true);
    $logo = __DIR__ . '/../images/caspani-lawyers-logo.png';
    if (is_readable($logo)) {
        $mail->addEmbeddedImage($logo, 'caspani-logo', 'caspani-lawyers-logo.png');
    }
    return $mail;
}

try {
    $admin = make_mailer($config);
    foreach (preg_split('/[,;]\s*/', $config['ADMIN_EMAIL']) as $address) {
        $admin->addAddress($address);
    }
    $admin->addReplyTo($data['email'], $data['fullName']);
    $admin->Subject = admin_email_subject($data);
    $admin->Body = admin_email_html($data, $meta);
    $admin->AltBody = admin_email_text($data, $meta);
    $admin->send();
} catch (MailException $ex) {
    error_log('Consultation form: admin email failed: ' . $ex->getMessage());
    respond(502, ['ok' => false, 'error' => $debug ? 'Admin email failed: ' . $ex->getMessage() : 'We could not send your request. Please try again or contact us on WhatsApp.']);
}

// The request has reached the firm; a failed confirmation email is logged but does not fail the submission.
$clientSent = true;
try {
    $client = make_mailer($config);
    $client->addAddress($data['email'], $data['fullName']);
    $client->addReplyTo(preg_split('/[,;]\s*/', $config['ADMIN_EMAIL'])[0], $config['MAIL_FROM_NAME'] ?? 'Caspani Lawyers');
    $client->Subject = client_email_subject();
    $client->Body = client_email_html($data, $config);
    $client->AltBody = client_email_text($data, $config);
    $client->send();
} catch (MailException $ex) {
    $clientSent = false;
    error_log('Consultation form: thank-you email failed: ' . $ex->getMessage());
}

respond(200, ['ok' => true, 'confirmationSent' => $clientSent]);
