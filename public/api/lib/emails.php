<?php

/**
 * HTML and plain-text bodies of the two emails sent for each consultation request:
 *  - admin_email_*  : the firm's notification with every submitted field
 *  - client_email_* : the thank-you confirmation sent to the person who filled in the form
 *
 * Email clients ignore <style> blocks and modern CSS, so the layout uses tables and inline styles only.
 * The logo is embedded in the message (cid:caspani-logo) so it shows even before the site is online.
 */

const BRAND_NAVY = '#0f1e36';
const BRAND_GOLD = '#775a19';
const BRAND_GOLD_LIGHT = '#e9c176';
const BRAND_TEXT = '#44474d';
const FIRM_WHATSAPP = '5541998247700';
const FIRM_WHATSAPP_DISPLAY = '+55 (41) 99824-7700';

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/** Outer frame shared by both emails: logo, navy title band, white body, footer */
function email_layout(string $preheader, string $title, string $subtitle, string $body, string $footer): string
{
    $font = "'Open Sans', Arial, Helvetica, sans-serif";
    $heading = "'Century Gothic', 'Trebuchet MS', Arial, sans-serif";
    return '<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>' . e($title) . '</title>
</head>
<body style="margin:0;padding:0;background:#f1f2f4;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f1f2f4;">' . e($preheader) . '</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f2f4;">
<tr><td align="center" style="padding:32px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e2e2e4;">
    <tr><td align="center" style="padding:28px 32px 22px;background:#ffffff;">
      <img src="cid:caspani-logo" width="150" alt="Caspani Lawyers" style="display:block;width:150px;max-width:150px;height:auto;border:0;">
    </td></tr>
    <tr><td style="height:3px;line-height:3px;font-size:0;background:' . BRAND_GOLD . ';">&nbsp;</td></tr>
    <tr><td style="padding:30px 36px;background:' . BRAND_NAVY . ';">
      <p style="margin:0 0 8px;font-family:' . $font . ';font-size:11px;letter-spacing:2px;text-transform:uppercase;color:' . BRAND_GOLD_LIGHT . ';">' . e($subtitle) . '</p>
      <h1 style="margin:0;font-family:' . $heading . ';font-size:24px;line-height:32px;font-weight:normal;color:#ffffff;">' . e($title) . '</h1>
    </td></tr>
    <tr><td style="padding:32px 36px 12px;font-family:' . $font . ';font-size:15px;line-height:24px;color:' . BRAND_TEXT . ';">' . $body . '</td></tr>
    <tr><td style="padding:22px 36px 28px;border-top:1px solid #e2e2e4;background:#f8f9fa;font-family:' . $font . ';font-size:12px;line-height:19px;color:#75777e;">' . $footer . '</td></tr>
  </table>
</td></tr>
</table>
</body>
</html>';
}

/** Label/value rows of the submitted form, skipping empty values */
function detail_rows(array $rows): string
{
    $html = '';
    foreach ($rows as $label => $value) {
        if ($value === null || $value === '') {
            continue;
        }
        $html .= '<tr>
  <td valign="top" style="padding:11px 14px;width:38%;border-bottom:1px solid #ececee;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;color:' . BRAND_GOLD . ';">' . e($label) . '</td>
  <td valign="top" style="padding:11px 14px;border-bottom:1px solid #ececee;font-family:Arial,sans-serif;font-size:14px;line-height:21px;color:#1a1c1d;">' . $value . '</td>
</tr>';
    }
    return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e2e4;border-top:2px solid ' . BRAND_GOLD . ';">' . $html . '</table>';
}

function button(string $href, string $label, string $background, string $color = '#ffffff'): string
{
    return '<a href="' . e($href) . '" style="display:inline-block;margin:0 8px 10px 0;padding:12px 22px;background:' . $background . ';color:' . $color . ';font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:6px;">' . e($label) . '</a>';
}

function whatsapp_digits(array $d): string
{
    return preg_replace('/\D+/', '', $d['countryCode'] . $d['phone']);
}

/* ---------------------------------------------------------------- admin notification */

function admin_email_subject(array $d): string
{
    return 'New consultation request: ' . ($d['service'] ?: 'Legal consultation') . ' (' . $d['fullName'] . ')';
}

function admin_email_html(array $d, array $meta): string
{
    $rows = [
        'Full name' => e($d['fullName']),
        'Email' => '<a href="mailto:' . e($d['email']) . '" style="color:' . BRAND_NAVY . ';">' . e($d['email']) . '</a>',
        'WhatsApp / phone' => e(trim($d['countryCode'] . ' ' . $d['phone'])),
        'Country of residence' => e($d['country']),
        'Preferred language' => e($d['language']),
        'Legal matter' => e($d['service']),
        $d['extraLabel'] ?: 'Additional detail' => e($d['extra']),
        'Preferred date & time' => e($d['availability']),
    ];
    $message = $d['message'] !== ''
        ? '<p style="margin:26px 0 8px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;color:' . BRAND_GOLD . ';">Brief description of the case</p>
<div style="padding:16px 18px;background:#f8f9fa;border-left:2px solid ' . BRAND_GOLD . ';font-size:14px;line-height:22px;color:#1a1c1d;">' . nl2br(e($d['message'])) . '</div>'
        : '';
    $wa = whatsapp_digits($d);
    $body = '<p style="margin:0 0 20px;">A new consultation request was submitted on the website. Reply to this email to answer <strong style="color:' . BRAND_NAVY . ';">' . e($d['fullName']) . '</strong> directly.</p>'
        . detail_rows($rows)
        . $message
        . '<div style="margin:26px 0 8px;">'
        . button('mailto:' . $d['email'] . '?subject=' . rawurlencode('Your consultation request - Caspani Lawyers'), 'Reply by email', BRAND_NAVY)
        . ($wa !== '' ? button('https://wa.me/' . $wa, 'Open WhatsApp chat', '#25D366') : '')
        . '</div>';
    $footer = 'Submitted ' . e($meta['submittedAt']) . ($meta['page'] !== '' ? ' from <a href="' . e($meta['page']) . '" style="color:#75777e;">' . e($meta['pageLabel']) . '</a>' : '')
        . ($meta['formTitle'] !== '' ? ' (form: ' . e($meta['formTitle']) . ')' : '') . '.<br>Sender IP: ' . e($meta['ip']) . '. A thank-you confirmation was sent to the client automatically.';
    return email_layout('New request from ' . $d['fullName'] . ' - ' . ($d['service'] ?: 'Legal consultation'), 'New Consultation Request', 'Website form', $body, $footer);
}

function admin_email_text(array $d, array $meta): string
{
    $lines = [
        'NEW CONSULTATION REQUEST',
        '',
        'Full name: ' . $d['fullName'],
        'Email: ' . $d['email'],
        'WhatsApp / phone: ' . trim($d['countryCode'] . ' ' . $d['phone']),
    ];
    foreach (['Country of residence' => 'country', 'Preferred language' => 'language', 'Legal matter' => 'service', 'Preferred date & time' => 'availability'] as $label => $key) {
        if ($d[$key] !== '') {
            $lines[] = $label . ': ' . $d[$key];
        }
    }
    if ($d['extra'] !== '') {
        $lines[] = ($d['extraLabel'] ?: 'Additional detail') . ': ' . $d['extra'];
    }
    if ($d['message'] !== '') {
        $lines[] = '';
        $lines[] = 'Brief description of the case:';
        $lines[] = $d['message'];
    }
    $lines[] = '';
    $lines[] = 'Submitted ' . $meta['submittedAt'] . ($meta['page'] !== '' ? ' from ' . $meta['page'] : '') . '. Sender IP: ' . $meta['ip'] . '.';
    return implode("\n", $lines);
}

/* ---------------------------------------------------------------- client thank-you */

function client_email_subject(): string
{
    return 'We received your consultation request - Caspani Lawyers';
}

function client_first_name(array $d): string
{
    $parts = preg_split('/\s+/', trim($d['fullName']));
    return $parts[0] ?? $d['fullName'];
}

function client_email_html(array $d, array $config): string
{
    $steps = [
        ['Receive Consultation Details', 'Our office will provide appointment availability, professional fees and payment instructions.'],
        ['Confirm Your Appointment', 'Your appointment will be confirmed once the consultation fee has been paid.'],
        ['Meet Your Attorney Online', 'Attend your private consultation via Google Meet and discuss your legal options and next steps.'],
    ];
    $stepsHtml = '';
    foreach ($steps as $i => [$title, $text]) {
        $stepsHtml .= '<tr>
  <td valign="top" width="44" style="padding:0 0 18px;">
    <div style="width:30px;height:30px;line-height:30px;border-radius:15px;background:' . BRAND_NAVY . ';color:' . BRAND_GOLD_LIGHT . ';font-family:Georgia,serif;font-size:14px;text-align:center;">' . ($i + 1) . '</div>
  </td>
  <td valign="top" style="padding:3px 0 18px;font-family:Arial,sans-serif;">
    <strong style="display:block;font-size:15px;color:' . BRAND_NAVY . ';margin-bottom:2px;">' . e($title) . '</strong>
    <span style="font-size:14px;line-height:21px;color:' . BRAND_TEXT . ';">' . e($text) . '</span>
  </td>
</tr>';
    }
    $summary = detail_rows([
        'Legal matter' => e($d['service']),
        'Preferred language' => e($d['language']),
        'Preferred date & time' => e($d['availability']),
        'Email' => e($d['email']),
        'WhatsApp / phone' => e(trim($d['countryCode'] . ' ' . $d['phone'])),
    ]);
    $site = rtrim($config['SITE_URL'] ?? '', '/');
    $body = '<p style="margin:0 0 16px;">Dear ' . e(client_first_name($d)) . ',</p>
<p style="margin:0 0 16px;">Thank you for contacting <strong style="color:' . BRAND_NAVY . ';">Caspani Lawyers | Advocacia Internacional</strong>. We have received your consultation request and our office will contact you with the next steps.</p>
<p style="margin:28px 0 14px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:' . BRAND_GOLD . ';">What happens next</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">' . $stepsHtml . '</table>
<p style="margin:14px 0 12px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:' . BRAND_GOLD . ';">Your request</p>'
        . $summary
        . '<p style="margin:26px 0 14px;">Need to add something or prefer to talk on WhatsApp? Simply reply to this email, or message our office:</p>
<div style="margin:0 0 6px;">'
        . button('https://wa.me/' . FIRM_WHATSAPP, 'WhatsApp ' . FIRM_WHATSAPP_DISPLAY, '#25D366')
        . ($site !== '' ? button($site, 'Visit our website', BRAND_NAVY) : '')
        . '</div>
<p style="margin:20px 0 4px;">Kind regards,</p>
<p style="margin:0 0 20px;"><strong style="color:' . BRAND_NAVY . ';">Caspani Lawyers | Advocacia Internacional</strong><br><span style="color:' . BRAND_GOLD . ';">Your International Law Firm in Brazil.</span></p>';
    $footer = 'All consultations are paid and subject to advance payment. Consultation fees are communicated before booking confirmation. Submitting a request does not establish an attorney-client relationship.<br><br>'
        . 'You received this email because you requested a consultation on our website. Please do not send confidential documents by email before your consultation is confirmed.';
    return email_layout('We received your consultation request. Here is what happens next.', 'Thank You, ' . client_first_name($d), 'Consultation request received', $body, $footer);
}

function client_email_text(array $d, array $config): string
{
    $lines = [
        'Dear ' . client_first_name($d) . ',',
        '',
        'Thank you for contacting Caspani Lawyers | Advocacia Internacional. We have received your consultation request and our office will contact you with the next steps.',
        '',
        'WHAT HAPPENS NEXT',
        '1. Receive Consultation Details - Our office will provide appointment availability, professional fees and payment instructions.',
        '2. Confirm Your Appointment - Your appointment will be confirmed once the consultation fee has been paid.',
        '3. Meet Your Attorney Online - Attend your private consultation via Google Meet and discuss your legal options and next steps.',
        '',
        'YOUR REQUEST',
    ];
    foreach (['Legal matter' => 'service', 'Preferred language' => 'language', 'Preferred date & time' => 'availability', 'Email' => 'email'] as $label => $key) {
        if ($d[$key] !== '') {
            $lines[] = $label . ': ' . $d[$key];
        }
    }
    $lines[] = 'WhatsApp / phone: ' . trim($d['countryCode'] . ' ' . $d['phone']);
    $lines[] = '';
    $lines[] = 'Questions? Reply to this email or message us on WhatsApp: ' . FIRM_WHATSAPP_DISPLAY . ' (https://wa.me/' . FIRM_WHATSAPP . ')';
    $lines[] = '';
    $lines[] = 'Kind regards,';
    $lines[] = 'Caspani Lawyers | Advocacia Internacional';
    $lines[] = 'Your International Law Firm in Brazil.';
    $lines[] = '';
    $lines[] = 'All consultations are paid and subject to advance payment. Submitting a request does not establish an attorney-client relationship.';
    return implode("\n", $lines);
}
