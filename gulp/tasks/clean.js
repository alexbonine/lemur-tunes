var gulp = require('gulp');
var del = require('del');
var config = require('../config.js').clean;

// Clean output directory
gulp.task('clean', del.bind(
  null, config, {dot: true}
));