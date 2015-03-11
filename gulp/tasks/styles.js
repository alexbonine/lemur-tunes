var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var config = require('../config').styles;

var RELEASE = !!argv.release;

// CSS style sheets
gulp.task('styles', function() {
  return gulp.src(config.srcFiles)
    .pipe($.plumber())
    .pipe($.less({
      sourceMap: !RELEASE,
      sourceMapBasepath: __dirname
    }))
    .on('error', console.error.bind(console))
    .pipe($.autoprefixer({browsers: config.browsers}))
    .pipe($.csscomb())
    .pipe($.if(RELEASE, $.minifyCss()))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'styles'}));
});