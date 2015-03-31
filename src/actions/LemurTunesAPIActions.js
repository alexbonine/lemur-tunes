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
    })
  },

  handleShowsError: function(error) {
    console.log('Shows error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_SHOWS_ERROR
    })
  },

  handleCitiesSuccess: function(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_CITIES_SUCCESS,
      response: response
    })
  },

  handleCitiesError: function(error) {
    console.log('Cities error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.LEMURTUNES_CITIES_ERROR,
      error: error
    })
  }
}