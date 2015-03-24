/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import 'babel/polyfill';

//import React from 'react/addons';
// import emptyFunction from 'react/lib/emptyFunction';
//import App from './components/App';
import router from './routes/router';
// import Dispatcher from './core/Dispatcher';
// import AppActions from './actions/AppActions';
// import ActionTypes from './constants/ActionTypes';
import injectTapEventPlugin from 'react-tap-event-plugin';

module.exports = {
  init: function() {
    console.log('init app.js');
  },
  renderToDom: function () {
    injectTapEventPlugin();  // required by material UI until React v1
    router.renderToDom();
  },
  renderToString: function (path) {
    debugger;
    let body = router.renderToString(path || '/');
    return body;
  }
};

// let path = decodeURI(window.location.pathname);
// let setMetaTag = (name, content) => {
//   // Remove and create a new <meta /> tag in order to make it work
//   // with bookmarks in Safari
//   let elements = document.getElementsByTagName('meta');
//   [].slice.call(elements).forEach((element) => {
//     if (element.getAttribute('name') === name) {
//       element.parentNode.removeChild(element);
//     }
//   });
//   let meta = document.createElement('meta');
//   meta.setAttribute('name', name);
//   meta.setAttribute('content', content);
//   document.getElementsByTagName('head')[0].appendChild(meta);
// };

// function run() {
  // Render the top-level React component
  // let props = {
  //   path: path,
  //   onSetTitle: (title) => document.title = title,
  //   onSetMeta: setMetaTag,
  //   onPageNotFound: emptyFunction
  // };

  //let component = React.createElement(App, props);
  //let app = React.render(component, document.body);

  // Update `Application.path` prop when `window.location` is changed
  // Dispatcher.register((payload) => {
  //   if (payload.action.actionType === ActionTypes.CHANGE_LOCATION) {
  //     element = React.cloneElement(element, {path: payload.action.path});
  //     React.render(element, document.body)
  //   }
  // });

  // Router.run((Handler) => {
  //   React.render(<Handler/>, document.getElementById('root'));
  // });
// }

// Run the application when both DOM is ready
// and page content is loaded
// Promise.all([
//   new Promise((resolve) => {
//     if (window.addEventListener) {
//       window.addEventListener('DOMContentLoaded', resolve);
//     } else {
//       window.attachEvent('onload', resolve);
//     }
//   }),
//   new Promise((resolve) => {
//     AppActions.loadPage(path, resolve);
//   })
// ]).then(run);
