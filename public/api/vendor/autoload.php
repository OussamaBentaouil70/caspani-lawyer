<?php

/**
 * Autoloader for the bundled PHPMailer (vendor/phpmailer/phpmailer, v7.1.1).
 *
 * Equivalent to the one Composer generates for this project's composer.json; running `composer install`
 * in public/api replaces this file with Composer's own autoloader.
 */
spl_autoload_register(static function ($class) {
    $prefix = 'PHPMailer\\PHPMailer\\';
    if (strncmp($class, $prefix, strlen($prefix)) !== 0) {
        return;
    }
    $file = __DIR__ . '/phpmailer/phpmailer/src/' . str_replace('\\', '/', substr($class, strlen($prefix))) . '.php';
    if (is_file($file)) {
        require $file;
    }
});
