const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

function htmlTask() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
}

// CSS task
function cssTask() {
    return gulp.src('./src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([tailwindcss(), autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
}

// JavaScript task
function jsTask() {
    return gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'));
}

// Image task
function imageTask() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
}

// Watch task
function watchTask() {
    gulp.watch('./src/css/**/*.css', cssTask);
    gulp.watch('./src/js/**/*.js', jsTask);
    gulp.watch('./src/images/**/*', imageTask);
    gulp.watch('./src/**/*.html', htmlTask);
}

// Default Gulp task
exports.default = gulp.series(
    gulp.parallel(cssTask, jsTask, imageTask, htmlTask),
    watchTask
);