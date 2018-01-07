"use strict";

import gulp from "gulp";
import runSequence from "run-sequence";
import watch from "gulp-watch";
import clean from "gulp-clean";
import browserify from "browserify";
import source from "vinyl-source-stream";
import sass from "gulp-sass";
import vueify from "vueify";

import browserSync from "browser-sync";

gulp.task("default", () =>{
    runSequence('clean',['index','javascript', 'libs', 'css' ,'src','browser-sync'],'watch')
})

// TASKS

gulp.task("clean", () => {
    return gulp.src('www')
    .pipe(clean());
})


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www"
        }
    });
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});


gulp.task("javascript", () =>{
    console.log("Javascript Bundle");
    return browserify("dev_www/js/index.js")
    .transform(vueify)
    .transform("babelify")
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("www/js"));
})

gulp.task("css", () =>{
    return gulp.src('dev_www/css/*.css')
    .pipe(gulp.dest('www/css'));
})

gulp.task("libs", () =>{
    return gulp.src('dev_www/js/libs/**')
    .pipe(gulp.dest('www/js/libs'));
})


gulp.task("src", () =>{
    return gulp.src('dev_www/src/**')
    .pipe(gulp.dest('www/src'));
})

gulp.task("index", () =>{
    return gulp.src('dev_www/index.html')
    .pipe(gulp.dest('www/'));
})

gulp.task("watch", () => {
    gulp.watch('dev_www/js/*.js', ['javascript','browser-reload']);
    gulp.watch('dev_www/js/**/*.vue', ['javascript','browser-reload']);
    gulp.watch('dev_www/src/**', ['src','browser-reload']);
    gulp.watch('dev_www/css/*.css', ['css','browser-reload']);
    gulp.watch('dev_www/js/components/*.vue', ['javascript','libs','browser-reload']);
    gulp.watch('dev_www/js/components/**/*.vue', ['javascript','libs','browser-reload']);
    gulp.watch('dev_www/index.html', ['index','libs', 'src', 'browser-reload']);
})