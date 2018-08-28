var gulp = require('gulp');
var runSequence = require('run-sequence');

// Build the app from source code
gulp.task('build', ['clean'], function(cb) {
  runSequence(['assets', 'styles', 'bundle'], cb);  // removed vender task
});