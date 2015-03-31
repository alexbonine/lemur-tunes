'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
// import SongkickAPI from '../utils/SongkickAPI';
import LemurTunesAPI from '../utils/LemurTunesAPI';
//import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';

export default {

  setLocation: function (location) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.CHANGE_LOCATION,
      location: location
    })
  },

  requestLocationOptions: function () {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.LOCATION_OPTIONS_REQUEST
    });

    LemurTunesAPI.requestLocationOptions();
  },

  // setPlaylists: function () {  //agb server or view?
  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.PLAYLISTS_SET,
  //     playlists: playlists
  //   })
  // },

  requestShows: function () {
    //todo not handled but could add spinner or something
    Dispatcher.handleViewAction({
      actionType: ActionTypes.SHOWS_REQUEST
    });

    LemurTunesAPI.requestShows();  //todo pagination number?
  },

  requestPlaylists: function () {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.PLAYLISTS_REQUEST
    });

    LemurTunesAPI.requestPlaylists();
  },

  setNewCity: function (newCity) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.ADMIN_SET_NEW_CITY,
      newCity: newCity
    })
  },

  addCity: function (city) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.ADMIN_ADD_CITY
    });

    LemurTunesAPI.addCity(city)
  }

  // setShows: function () {  //agb server or view?
  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.SHOWS_SET,
  //     shows: shows
  //   })
  // },

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
