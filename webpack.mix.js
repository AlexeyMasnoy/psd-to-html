let mix = require('laravel-mix');

mix.copy('app/index.html', 'dist')
    .copy('app/img', 'dist/img')
    .js('app/js/script.js', '/dist')
   .css('app/css/style.css', '/dist')
   .browserSync({
    server: {
        baseDir: "dist",
        index: "index.html"
    }, //Your host
    files: [ //Files for watching
        "app/**/*",
    ],
})
