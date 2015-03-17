'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var playlists = [  //todo move to server
    { id: '1', name: 'It\'s No Fun Being On Time Mix', date: 'Dec 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:0EXqQxzHrrHx5mudsXkIMi' },
    { id: '2', name: 'PIce Skating Isn\'t For Pussies (It\'s For Canadians and Romantics)', date: 'Nov 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:3p9F2oWOqAsGMbLo2fENRo' },
    { id: '3', name: 'Where Have You Gone Patio Weather Mix', date: 'Oct 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:3BCqSLdHHtqOXKVIsIe6j0' },
    { id: '4', name: 'Sell By Date June Mix', date: 'Sept 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:5fcBYWrLKj6HTKNA6U9dIn' },
    { id: '5', name: 'Shake That Ring Tail Mix', date: 'May 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:0lBzfwFA25xgOU5gJ6RFLl' },
    { id: '6', name: 'Better 5 Days Late Than 18 Years Of A Roommate', date: 'Apr 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:535Zujkl6Vzl2J0s4p39gD' },
    { id: '7', name: 'One Month Injury-Free Mix', date: 'Mar 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:6fvXGiN7852KUoPpd2N1dJ' },
    { id: '8', name: 'Fuck February', date: 'Feb 2014', embedSrc: 'https://embed.spotify.com/?uri=spotify:user:122705250:playlist:26AMG3RrFr7gkUXSVKhapX' }
  ]

// var setPlaylists = function (newPlaylists) {
//   playlists = newPlaylists;
// }

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

var PlaylistStore = assign({}, EventEmitter.prototype, {

  getPlaylists() {
    return playlists;
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
  var action = payload.action;

  switch (action.actionType) {

    // case ActionTypes.PLAYLISTS_SET:
    //   setPlaylists(action.location);
    //   PlaylistStore.emitChange();
    //   break;

    default:
      // Do nothing
  }

});

module.exports = PlaylistStore;
