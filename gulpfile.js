const gulp= require('gulp');
const sass= require('gulp-sass');
const csso= require('gulp-csso');
const uglify = require ('gulp-uglify');
const browserSync = require('browser-sync').create();

 function style (){
     return gulp
     .src('./src/styles/style.scss')
     .pipe(sass())
     .pipe(gulp.dest('./dist/css'));
 }

  function minifyCss(){
     return gulp
     .src('.dist/css/*.css')
     .pipe(csso())
     .pipe(gulp.dest('./dist/css'));
 }


  function minifyJs(){
     return gulp.src('./src/scripts/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('./dist/scripts'));
 }


  function watch(){
     browserSync.init({
         server: {
             baseDir: './',
         },
     });

     gulp.watch('./scss/*.scss', style);
     gulp.watch('./*.html').on('change',browserSync.reload);
     gulp.watch('./dist/**/*.css').on('change', browserSync.reload);
     gulp.watch('./script/*.js').on('change',browserSync.reload);

 }

 exports.style=style;
 exports.minifyCss =minifyCss;
 exports.minifyJs =minifyJs;
 exports.watch=watch;
 exports.default=gulp.parallel(gulp.series(style,minifyCss), minifyJs);