let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
let connect = require('gulp-connect-php');
let sass = require('gulp-sass')(require('node-sass'));
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');

// definir la tarea de gulp
gulp.task('sass', done => {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

  done();
});

//gulp.task('watch', function (){
gulp.task('watch', done => {
  gulp.watch('./scss/**/*.scss').on('change', gulp.series('sass'));
  gulp.watch('./css/**/*.css').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
  gulp.watch('./templates/**/*.html.twig').on('change', browserSync.reload);
  connect.server({}, function (){
    browserSync.init({
      proxy: 'https://d9.ddev.site',
    })
  });
  done();
});
