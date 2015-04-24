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

  setPlaylist: function (index) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.CHANGE_PLAYLIST,
      index: index
    })
  },

  setCalendarDateSelected: function (index, text) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.CHANGE_CALENDAR_DATE,
      text: text,
      index: index
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

  requestShows: function (limit, offset) {
    //todo not handled but could add spinner or something
    Dispatcher.handleViewAction({
      actionType: ActionTypes.SHOWS_REQUEST
    });

    LemurTunesAPI.requestShows(limit, offset);  //todo pagination number?
  },

  requestPlaylists: function (initialData) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.PLAYLISTS_REQUEST
    });

    LemurTunesAPI.requestPlaylists(initialData);
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
  },

  verifySongkick: function () {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.VERIFY_SONGKICK_GET
    });

    LemurTunesAPI.verifySongkick();
  },

  importAllData: function (username, cities, shows, playlists, songs, bands) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.IMPORT_ALL_DATA_GET,
      username: username,
      cities: cities,
      shows: shows,
      playlists: playlists,
      songs: songs,
      bands: bands
    });

    LemurTunesAPI.importAllData(username, cities, shows, playlists, songs, bands);
  },

  updateShowsDb: function () {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_SHOWS_DB_GET
    });

    LemurTunesAPI.updateShowsDb();
  },

  requestDbStats: function () {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.DB_STATS_GET
    });

    LemurTunesAPI.requestDbStats();
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
