<?php

$rules = [
    '@PSR2'        => true,
    'array_syntax' => ['syntax' => 'short'],
    'braces'       => false,
];
$excludes = ['path/to', 'file'];

return PhpCsFixer\Config::create()
    ->setRules($rules)
    ->setFinder(
        PhpCsFixer\Finder::create()
            ->in(__DIR__)
            ->exclude($excludes)
            ->notName('README.md')
            ->notName('*.xml')
            ->notName('*.yml')
    );