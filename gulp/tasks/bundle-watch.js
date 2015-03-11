var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));
var config = require('../webpack.config.js');

// Bundle w/ watch
gulp.task('bundle-watch', function(cb) {
  var started = false;
  var bundler = webpack(config);

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    if (argv.verbose) {
      $.util.log('[webpack]', stats.toString({colors: true}));
    }

    if (!started) {
      started = true;
      return cb();
    }
  }

  bundler.watch(200, bundle);
});