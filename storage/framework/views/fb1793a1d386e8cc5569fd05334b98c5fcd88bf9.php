<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?php echo e(config('app.name', 'Vue Laravel SPA')); ?></title>
        <!-- Styles -->
        <link href="<?php echo e(mix('/css/app.css')); ?>" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>
        <!-- Scripts -->
        <script src="<?php echo e(mix('/js/app.js')); ?>" defer></script>
    </body>
</html>
<?php /**PATH /work/backend/resources/views/welcome.blade.php ENDPATH**/ ?>