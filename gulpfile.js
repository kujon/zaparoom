require('babel/register');

var gulp            = require('gulp');
var jshint          = require('gulp-jshint');
var stylish         = require('jshint-stylish');
var jscs            = require('gulp-jscs');
var jsccsstylish    = require('gulp-jscs-stylish');
var mocha           = require('gulp-mocha');
var istanbul        = require('gulp-istanbul');
var isparta         = require('isparta');
var browserify      = require('gulp-browserify');

var paths = {
    APP_FILES: ['web/**/*.js', 'worker/**/*.js', '!**/bootstrap_es6.js', '!**/build/**/*.js'],
    UI_ENTRY: 'web/ui/main.js',
    TEST_FILES: ['test/**/*.js'],
    COVERAGE: process.env.CIRCLE_ARTIFACTS || './coverage'
};

// Lints all javascript files using JSHint.
gulp.task('lint', function () {
    return gulp
        .src(paths.APP_FILES)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Check code style
gulp.task('swag', function () {
    return gulp
        .src(paths.APP_FILES)
        .pipe(jscs())
        .on('error', function () {})
        .pipe(jsccsstylish());
});

// Prepares code coverage.
gulp.task('istanbul', function (done) {
    gulp
        .src(paths.APP_FILES)
        .pipe(istanbul({
            instrumenter: isparta.Instrumenter,
            includeUntested: true,
            babel: {stage: 0}
        }))
        .pipe(istanbul.hookRequire())
        .on('finish', done);
});

// Runs mocha tests.
gulp.task('test', ['istanbul'], function () {
    return gulp
        .src(paths.TEST_FILES)
        .pipe(mocha({
            reporter: 'nyan'
        }))
        .pipe(istanbul.writeReports({
            dir: paths.COVERAGE,
            reportOpts: {dir: paths.COVERAGE}
        }));
});

// Bundle js files together.
gulp.task('bundle', function () {
    gulp.src(paths.UI_ENTRY)
        .pipe(browserify({
            debug: true,
            transform: ['babelify', 'reactify']
        }))
        .pipe(gulp.dest('./web/build/js/'));
});

gulp.task('default', function () {
    return;
});
