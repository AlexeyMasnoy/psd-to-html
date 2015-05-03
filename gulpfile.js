var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");
//Запуск Локального сервера
gulp.task("connect", function () {
	// body...
	connect.server({
		root: "app",
		livereload: true,
		port: 8888
	});
	opn("http://localhost:8888");
});

// Работа с HTML
gulp.task("html", function(){
	gulp.src("./app/*.html")
		.pipe(connect.reload());
});

// Работа с CSS
gulp.task("css", function(){
	gulp.src("./app/css/*.css")
		.pipe(connect.reload());
});

// Работа с JS
gulp.task("js", function(){
	gulp.src("./app/js/*.js")
		.pipe(connect.reload());
});

// Слежка за изиенениями
gulp.task("watch", function(){
	gulp.watch(["./app/*.html"],["html"]);
	gulp.watch(["./app/css/*.css"],["css"]);
	gulp.watch(["./app/js/*.js"],["js"]);
});

// Задача по кмолчанию
gulp.task("default", ["connect", "watch"]);