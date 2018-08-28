var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var os = require('os');
var config = require('../config').deploy;

// Deploy to GitHub Pages
gulp.task('deploy', function() {

  // Remove temp folder
  if (argv.clean) {
    var repoPath = path.join(os.tmpdir(), config.repo);
    $.util.log('Delete ' + $.util.colors.magenta(repoPath));
    del.sync(repoPath, {force: true});
  }

  return gulp.src(config.src)
    .pipe($.if(config.robot, !argv.production ?
      $.replace('Disallow:', 'Disallow: /') : $.util.noop()))
    .pipe($.ghPages(config.github));
});