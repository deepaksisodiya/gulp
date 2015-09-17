/**
 * Created by deepaksisodiya on 17/09/15.
 */


var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concate = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// lint task
gulp.task('lint', function () {
    return gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// compile our sass
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// concatenate and minify JS
gulp.task('scripts', function () {
    return gulp.src('./js/*.js')
        .pipe(concate('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// watch files for changes
gulp.task('watch', function () {
    gulp.watch('./js/*.js', ['lint']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'watch', 'scripts']);