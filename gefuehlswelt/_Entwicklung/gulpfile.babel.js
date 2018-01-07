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
    return gulp.src('../gefuehlsweltCordova/www')
    .pipe(clean({force: true}));
})


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../gefuehlsweltCordova/www"
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
    .pipe(gulp.dest("../gefuehlsweltCordova/www/js"));
})

gulp.task("css", () =>{
    return gulp.src('dev_www/css/*.css')
    .pipe(gulp.dest('../gefuehlsweltCordova/www/css'));
})

gulp.task("libs", () =>{
    return gulp.src('dev_www/js/libs/**')
    .pipe(gulp.dest('../gefuehlsweltCordova/www/js/libs'));
})


gulp.task("src", () =>{
    return gulp.src('dev_www/src/**')
    .pipe(gulp.dest('../gefuehlsweltCordova/www/src'));
})

gulp.task("index", () =>{
    return gulp.src('dev_www/index.html')
    .pipe(gulp.dest('../gefuehlsweltCordova/www/'));
})


// Passe auf veränderungen auf.
gulp.task("watch", () => {
    gulp.watch('dev_www/**', ['javascript', 'libs', 'index', 'css' ,'src','browser-reload']);
})
