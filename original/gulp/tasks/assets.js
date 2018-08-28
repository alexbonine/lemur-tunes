var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config').assets;

// Static files
gulp.task('assets', function() {
  return gulp.src(config.src)
    .pipe($.changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'assets'}));
});