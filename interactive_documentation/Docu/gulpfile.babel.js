"use strict";

import gulp from "gulp";
import watch from "gulp-watch";
import clean from "gulp-clean";
import runSequence from "run-sequence";
import browserify from "browserify";
import source from "vinyl-source-stream";
import vueify from "vueify";
import browserSync from "browser-sync";

var exportpath = "./www";

// Erster Aufruf
gulp.task("default", () =>{
    runSequence('clean',['browser-sync'],'watch')
})

// Ordner leeren
gulp.task("clean", () => {
    return gulp.src('exportpath')
    .pipe(clean());
})

// Automatisch Seite neu laden
gulp.task('browser-sync', ['index','javascript','src'], function() {
    browserSync.init({
        server: {
            baseDir: exportpath
        }
    });
});

gulp.task('browser-reload', ['index','javascript','src'], function() {
    browserSync.reload();
});

// Füge Javascript in eine Datei zusammen
gulp.task("javascript", () =>{
    console.log("Javascript Bundle");
    return browserify("entwicklung/js/index.js")
    .transform(vueify)
    .transform("babelify")
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest(exportpath+"/js"));
})

// Kopiere Bilder, CSS, Labraries und Zeugs
gulp.task("src", () =>{
    return gulp.src('entwicklung/src/**')
    .pipe(gulp.dest(exportpath+'/src'));
})

// Kopiere Index.html
gulp.task("index", () =>{
    return gulp.src('entwicklung/index.html')
    .pipe(gulp.dest(exportpath+'/'));
})

// Passe auf veränderungen auf.
gulp.task("watch", () => {
    gulp.watch('entwicklung/**', ['browser-reload']);
})
