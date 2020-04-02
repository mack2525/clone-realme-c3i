const gulp = require('gulp');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

const htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
  return gulp.src('app/*.html')
              .pipe(htmlmin({ collapseWhitespace: true }))
              .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('app/css/*.css')
              .pipe(cleanCSS({compatibility: 'ie8'}))
              .pipe(rename( function(path){ path.extname = ".min.css" }))
              .pipe(gulp.dest('app/css'));
});

gulp.task('compress', function() {
  gulp.src(['app/js/*.js', 'app/js/*.mjs'])
       .pipe(minify())
       .pipe(gulp.dest('app/js'));
});

gulp.task('sass',function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', function() {
  browserSync.init({
    server:{
      baseDir: 'app/'
    },
  });

  gulp.watch(['app/js/modules/*.js', 'app/js/scripts.js'], ['waitForScripts']);
  gulp.watch('app/*.html',browserSync.reload);
  gulp.watch('app/*/*.html',browserSync.reload);
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/css/**/*.css',browserSync.reload);
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}