'use strict'

var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task('copy',function(){
    return gulp.src(['editDir/**/*'])
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream());
});

gulp.task('default',function(){
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch(['editDir/**/*'], ['copy']);
});
