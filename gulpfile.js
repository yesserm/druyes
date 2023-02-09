let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
let connect = require('gulp-connect-php');
let sass = require('gulp-sass');

gulp.task('watch', function (){
  gulp.watch('./templates/**/*.html.twig').on('change', browserSync.reload);
  connect.server({}, function (){
    browserSync.init({
      proxy: 'https://d9.ddev.site'
    })
  });
});
