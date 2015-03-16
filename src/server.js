/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';

// var debug = require('debug')('app');
//import router from './routes/router';
//var router = require('./routes/router');
// debug('hey')
var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname)));

//
// Page API
// -----------------------------------------------------------------------------
// server.get('/api/page/*', function(req, res) {
//   var urlPath = req.path.substr(9);
//   var page = AppStore.getPage(urlPath);
//   res.send(page);
// });

// Load library, make sure it's freshly instantiated
// var getInstance = function() {
//   require.uncache("../../build/js/app");
//   return new require("../../build/js/app");
// };

//
// Server-side rendering
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
// var App = React.createFactory(require('./components/App'));
var templateFile = path.join(__dirname, 'templates/index.html');
var template = _.template(fs.readFileSync(templateFile, 'utf8'));

// see react-spa: routes/isomorphic.js->controllers/isomorphic.js->app.js->router.js
server.get('*', function(req, res) {
  var data = {description: 'Server version', title: 'Testing Server'};
  // data.body = getInstance().renderToString(req.path);
  // // data.body = React.renderToString(new App());
  data.body = '';
  var html = template(data);
  res.send(html);
});

// // Load pages from the `/src/content/` folder into the AppStore
// (function() {
//   var assign = require('react/lib/Object.assign');
//   var fm = require('front-matter');
//   var jade = require('jade');
//   var sourceDir = path.join(__dirname, './content');
//   var getFiles = function(dir) {
//     var pages = [];
//     fs.readdirSync(dir).forEach(function(file) {
//       var stat = fs.statSync(path.join(dir, file));
//       if (stat && stat.isDirectory()) {
//         pages = pages.concat(getFiles(file));
//       } else {
//         // Convert the file to a Page object
//         var filename = path.join(dir, file);
//         var url = filename.
//           substr(sourceDir.length, filename.length - sourceDir.length - 5)
//           .replace('\\', '/');
//         if (url.indexOf('/index', url.length - 6) !== -1) {
//           url = url.substr(0, url.length - (url.length > 6 ? 6 : 5));
//         }
//         var source = fs.readFileSync(filename, 'utf8');
//         var content = fm(source);
//         var html = jade.render(content.body, null, '  ');
//         var page = assign({}, {path: url, body: html}, content.attributes);
//         Dispatcher.handleServerAction({
//           actionType: ActionTypes.LOAD_PAGE,
//           path: url,
//           page: page
//         });
//       }
//     });
//     return pages;
//   };
//   return getFiles(sourceDir);
// })();

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
