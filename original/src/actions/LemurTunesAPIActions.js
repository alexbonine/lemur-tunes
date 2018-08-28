'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  handlePlaylistsSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_PLAYLISTS_SUCCESS,
      playlists: response
    });
  },

  handlePlaylistsError: function(error) {
    console.log('Playlists Error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_PLAYLISTS_ERROR
    });
  },

  handleLocationOptionsSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_LOCATION_OPTIONS_SUCCESS,
      locationOptions: response
    });
  },

  handleLocationOptionsError: function(error) {
    console.log('Location Options Error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_LOCATION_OPTIONS_ERROR
    });
  },

  handleShowsSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_SHOWS_SUCCESS,
      shows: response
    });
  },

  handleShowsError: function(error) {
    console.log('Shows error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_SHOWS_ERROR
    });
  },

  // handleVerifySongkickSuccess: function(response) {
  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_VERIFY_SONGKICK_SUCCESS,
  //     results: response
  //   });
  // },

  // handleVerifySongkickError: function(error) {
  //   console.log('Verify Songkick error: ' + error);

  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_VERIFY_SONGKICK_ERROR
  //   });
  // },

  // handleImportAllDataSuccess: function(response) {
  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_IMPORT_ALL_DATA_GET_SUCCESS,
  //     results: response
  //   });
  // },

  // handleImportAllDataError: function(error) {
  //   console.log('Import All Data error: ' + error);

  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_IMPORT_ALL_DATA_GET_ERROR
  //   });
  // }

  handleAdminSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_ADMIN_SUCCESS,
      results: response
    });
  },

  handleAdminError: function(error) {
    console.log('Admin error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_ADMIN_ERROR,
      results: error
    });
  },

  handleDbStatsSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_DATABASE_STATS_SUCCESS,
      stats: response
    });
  },

  handleDbStatsError: function(error) {
    console.log('DB Stats error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_DATABASE_STATS_ERROR
    });
  }
 
  // handleCitiesSuccess: function(response) {  // for the post?
  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_CITIES_SUCCESS,
  //     response: response
  //   })
  // },

  // handleCitiesError: function(error) {
  //   console.log('Cities error: ' + error);

  //   Dispatcher.handleServerAction({
  //     actionType: ActionTypes.LEMURTUNES_CITIES_ERROR,
  //     error: error
  //   })
  // }
}