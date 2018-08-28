var dest = "./build";
var src = './src';

module.exports = {
  server: {
    src: [
      dest + '/server.js',
      dest + '/content/**/*',
      dest + '/templates/**/*'
    ]
  },
  assets: {
    src: [
      src + '/assets/**',
      src + '/content*/**/*.*',
      src + '/templates*/**/*.*'
    ],
    dest: dest
  },
  styles: {
    browsers: [  // https://github.com/ai/autoprefixer
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    src: src + '/styles/**/*.{css,less}',
    srcFiles: [
      src + '/styles/bootstrap.less',
      src + '/styles/material-ui.less',
      src + '/styles/custom.less'
    ],
    dest: dest + '/style'
  },
  // vendor: {
  //   src: 'node_modules/bootstrap/dist/fonts/**',
  //   dest: dest + '/fonts'
  // },
  serve: {
    child: dest + '/server.js'
  },
  sync: {
    watch: dest + '/**/*.*'
  },
  browserSync: {
    notify: false,
    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    https: false,
    // Informs browser-sync to proxy our Express app which would run
    // at the following location
    proxy: 'localhost:5000'
  },
  deploy: {
    repo: 'tmpRepo',
    github: {
      remoteUrl: 'https://github.com/{name}/{name}.github.io.git',
      branch: 'master'
    },
    robot: '**/robots.txt',
    src: dest + '/**/*'
  },
  clean: ['.tmp', dest + '/*', '!' + dest + '/.git'],
  pagespeed: {
    address: 'example.com',
    apiKey: 'YOUR_API_KEY'
  }
};
