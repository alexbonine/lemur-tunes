'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
//import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
//import http from 'superagent';

module.exports = {

  changeLocation: function (location) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.CHANGE_LOCATION,
      location: location
    })
  }

  // navigateTo(path) {
  //   if (ExecutionEnvironment.canUseDOM) {
  //     window.history.pushState({}, document.title, path);
  //   }

  //   Dispatcher.handleViewAction({
  //     actionType: ActionTypes.CHANGE_LOCATION, path: path
  //   });
  // },

  // loadPage(path, cb) {
  //   Dispatcher.handleViewAction({
  //     actionType: ActionTypes.LOAD_PAGE, path: path
  //   });

  //   http.get('/api/page' + path)
  //     .accept('application/json')
  //     .end((err, res) => {
  //       Dispatcher.handleServerAction({
  //         actionType: ActionTypes.LOAD_PAGE, path: path, err: err, page: res.body
  //       });
  //       if (cb) {
  //         cb();
  //       }
  //     });
  // }

};
