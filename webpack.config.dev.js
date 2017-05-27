var webpack = require('webpack');
var merge = require('lodash/merge');
var path = require('path');

var GLOBALS = {
  'process.env.NODE_ENV': '"development"',
  '__DEV__': true,
  '__SERVER__': true
};

module.exports = {
  address: 3008,
  entry: {
    compose: ['./dev/compose.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'],
    read: ['./dev/read.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'],
    calendarPopup: ['./dev/calendarPopup.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  cache: true,
  debug: true,
  devtool: '#inline-source-map',

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
    new webpack.HotModuleReplacementPlugin()
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
        loaders: ['style?sourceMap', 'css', 'postcss']
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
        loaders: ['react-hot', 'babel?cacheDirectory=true&presets[]=react,presets[]=es2015,presets[]=stage-2']
      }
    ]
  },

  postcss: function () {
    return [require('autoprefixer')({ browsers: ['last 2 versions'] }), require('precss')];
  }
};
