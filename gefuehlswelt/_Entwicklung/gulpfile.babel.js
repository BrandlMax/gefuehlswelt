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

// Path

gulp.task("default", () =>{
    runSequence('clean',['browser-sync'],'watch')
})

// TASKS

gulp.task("clean", () => {
    return gulp.src('../gefühlsweltElectron/public')
    .pipe(clean({force: true}));
})


gulp.task('browser-sync',['index','javascript', 'libs', 'css' ,'src'], function() {
    browserSync.init({
        server: {
            baseDir: "../gefühlsweltElectron/public"
        }
    });
});

gulp.task('browser-reload',['index','javascript', 'libs', 'css' ,'src'], function() {
    browserSync.reload();
});


gulp.task("javascript", () =>{
    console.log("Javascript Bundle");
    return browserify("dev_www/js/index.js")
    .transform(vueify)
    .transform("babelify")
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("../gefühlsweltElectron/public/js"));
})

gulp.task("css", () =>{
    return gulp.src('dev_www/css/*.css')
    .pipe(gulp.dest('../gefühlsweltElectron/public/css'));
})

gulp.task("libs", () =>{
    return gulp.src('dev_www/js/libs/**')
    .pipe(gulp.dest('../gefühlsweltElectron/public/js/libs'));
})


gulp.task("src", () =>{
    return gulp.src('dev_www/src/**')
    .pipe(gulp.dest('../gefühlsweltElectron/public/src'));
})

gulp.task("index", () =>{
    return gulp.src('dev_www/index.html')
    .pipe(gulp.dest('../gefühlsweltElectron/public/'));
})


// Passe auf veränderungen auf.
gulp.task("watch", () => {
    gulp.watch('dev_www/**', ['browser-reload']);
})
