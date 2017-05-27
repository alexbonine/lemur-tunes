var webpack = require('webpack');
var merge = require('lodash/merge');
var path = require('path');

var GLOBALS = {
  'process.env.NODE_ENV': '"production"',
  '__DEV__': false,
  '__SERVER__': true
};

var common = {

  cache: false,
  debug: false,
  devtool: false,

  stats: {
    colors: true,
    reasons: false,
    //assets: true,
    //timings: true,
    //chunks: true
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],

 eslint: {
   configFile: '.eslintrc'
 },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.woff(2)?/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.ttf/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.eot/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'dev')],
        loaders: ['babel?cacheDirectory=true&presets[]=react,presets[]=es2015,presets[]=stage-2']
      }
    ]
  }
};

var read = merge({}, common, {
  entry: './src/read.js',
  output: {
    filename: 'read.js',
    path: './build/',
    library: 'read'
  }
});

var compose = merge({}, common, {
  entry: './src/compose.js',
  output: {
    filename: 'compose.js',
    path: './build/',
    library: 'compose'
  }
});

var calendarPopup = merge({}, common, {
  entry: './src/calendarPopup.js',
  output: {
    filename: 'calendarPopup.js',
    path: './build/',
    library: 'calendarPopup'
  }
});

module.exports = { read: read, compose: compose, calendarPopup: calendarPopup };
