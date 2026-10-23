<?php

/**
 * Reads KEY=VALUE pairs from a .env file into an array (blank lines and # comments are ignored,
 * surrounding single or double quotes are removed). Existing environment variables take precedence.
 */
function load_env(string $path): array
{
    $values = [];
    if (is_readable($path)) {
        foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            $line = trim($line);
            if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
                continue;
            }
            [$key, $value] = array_map('trim', explode('=', $line, 2));
            if (preg_match('/^(["\'])(.*)\1$/', $value, $m)) {
                $value = $m[2];
            }
            $values[$key] = $value;
        }
    }
    foreach ($values as $key => $value) {
        $fromServer = getenv($key);
        if ($fromServer !== false && $fromServer !== '') {
            $values[$key] = $fromServer;
        }
    }
    return $values;
}
