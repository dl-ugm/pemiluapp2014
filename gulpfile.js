// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass    = require('gulp-ruby-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var include = require('gulp-include');

// CSS File
var mainCSS  = 'assets/css/main.scss',
    watchCSS = [mainCSS,'packages/**/*.scss'];

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(mainCSS)
        .pipe(sass({ style:'compressed' }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'));
});

var mainJS  = 'assets/js/main.js',
    watchJS = [mainJS,'packages/**/*.js','assets/js/**/*.js'];

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(mainJS)
        .pipe(include())
        // .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch our file
gulp.task('watch', function() {
    gulp.watch(watchCSS, ['sass']);
    gulp.watch(watchJS, ['scripts']);
});

// Default Task
gulp.task('default', ['sass','scripts','watch']);
