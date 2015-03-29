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
  }
}