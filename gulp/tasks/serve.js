var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cp = require('child_process');
var assign = require('react/lib/Object.assign');
var config = require('../config');
var browserSync;

// Launch a Node.js/Express server
gulp.task('serve', ['watch'], function(cb) {
  var started = false;

  var server = (function startup() {
    var child = cp.fork(config.serve.child, {
      env: assign({NODE_ENV: 'development'}, process.env)
    });
    child.once('message', function(message) {
      if (message.match(/^online$/)) {
        if (browserSync) {
          browserSync.reload();
        }
        if (!started) {
          started = true;
          gulp.watch(config.server.src, function() {
            $.util.log('Restarting development server.');
            server.kill('SIGTERM');
            server = startup();
          });
          cb();
        }
      }
    });
    return child;
  })();

  process.on('exit', function() {
    server.kill('SIGTERM');
  });
});