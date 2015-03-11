var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

// Build and start watching for modifications
gulp.task('watch', ['clean'], function(cb) {
  runSequence('vendor', 'assets', 'styles', 'bundle-watch', function() {
    gulp.watch(config.assets.src, ['assets']);
    gulp.watch(config.styles.src, ['styles']);
    cb();
  });
});