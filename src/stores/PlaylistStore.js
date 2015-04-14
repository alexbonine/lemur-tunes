'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'change';

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

let playlists = [];
let playlist = 1;
let playlistOptions = [
  { payload: 0, text: 'All' }
];

let setPlaylists = function (newPlaylists) {
  playlists = newPlaylists;
}

let setPlaylist = function (index) {
  playlist = index;
}

let setPlaylistOptions = function (newOptions) {
  for (var i = 0; i < newOptions.length; i++) {
    playlistOptions.push({ payload: i+1, 'text': newOptions[i].name})
  }
}

let PlaylistStore = assign({}, EventEmitter.prototype, {

  getPlaylists() {
    return playlists;
  },

  getPlaylist() {
    return playlist;
  },

  getPlaylistOpitons() {
    return playlistOptions;
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  removeChangeListener(callback) {
    this.off(CHANGE_EVENT, callback);
  }

});

PlaylistStore.dispatcherToken = Dispatcher.register((payload) => {
  let action = payload.action;

  switch (action.actionType) {

    case ActionTypes.CHANGE_PLAYLIST:
      setPlaylist(action.index);
      PlaylistStore.emitChange();
      break;

    case ActionTypes.LEMURTUNES_PLAYLISTS_SUCCESS:
      setPlaylists(action.playlists);
      setPlaylistOptions(action.playlists);
      PlaylistStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default PlaylistStore;
