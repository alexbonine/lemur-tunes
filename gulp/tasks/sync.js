var gulp = require('gulp');
var browserSync = require('browser-sync');
var path = require('path');
var config  = require('../config');

// Launch BrowserSync development server
gulp.task('sync', ['serve'], function(cb) {
  browserSync(config.browserSync, cb);

  process.on('exit', function() {
    browserSync.exit();
  });

  gulp.watch([config.sync.watch].concat(
    config.server.src.map(function(file) {return '!' + file;})
  ), function(file) {
    browserSync.reload(path.relative(__dirname, file.path));
  });
});