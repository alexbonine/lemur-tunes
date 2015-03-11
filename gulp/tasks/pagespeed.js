var gulp = require('gulp');
var pagespeed = require('psi');
var config = require('../config').pagespeed;

// Run PageSpeed Insights
gulp.task('pagespeed', function(cb) {
  // Update the below URL to the public URL of your site
  pagespeed.output(config.address, {
    strategy: 'mobile'
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: config.apiKey
  }, cb);
});