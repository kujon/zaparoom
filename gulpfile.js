require('babel/register');

var gulp            = require('gulp');
var jshint          = require('gulp-jshint');
var stylish         = require('jshint-stylish');
var jscs            = require('gulp-jscs');
var jsccsstylish    = require('gulp-jscs-stylish');
var mocha           = require('gulp-mocha');
var istanbul        = require('gulp-istanbul');
var isparta         = require('isparta');

var paths = {
    APP_FILES: ['web/**/*.js', 'worker/**/*.js', '!**/bootstrap_es6.js'],
    TEST_FILES: ['test/**/*.js']
};

// Lints all javascript files using JSHint.
gulp.task('lint', function () {
    return gulp
        .src(paths.APP_FILES)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Check code style
gulp.task('style', function () {
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
            dir: process.env.CIRCLE_ARTIFACTS || './coverage',
            reportOpts: {dir: process.env.CIRCLE_ARTIFACTS || './coverage'}
        }));
});

gulp.task('default', function () {
    return;
});
