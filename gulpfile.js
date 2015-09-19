var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

// Lints all javascript files using JSHint.
gulp.task('lint', function () {
    return gulp
        .src(['web/**/*.js', 'worker/**/*.js', '!**/bootstrap_es6.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', function () {
    return;
});
