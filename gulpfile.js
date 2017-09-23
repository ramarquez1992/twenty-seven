const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const jslint = require('gulp-jslint');

gulp.task('scripts', function() {
  return gulp.src('./src/public/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/public/'));
});

gulp.task('styles', function() {
  return gulp.src('./src/public/styles/*.scss')
    .pipe(concat('styles.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', function(err) { console.log(err); })
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/public/'));
});

gulp.task('lint', function() {
  return gulp.src(['./src/public/js/*.js', './src/controllers/*.js', './src/models/*.js'])
    .pipe(jslint({ node: true }))
    .pipe(jslint.reporter('stylish'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/public/js/*.js', './src/controllers/*.js', './src/models/*.js'], ['lint']);
  gulp.watch('./src/public/js/*.js', ['scripts']);
  gulp.watch('./src/public/styles/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles']);
