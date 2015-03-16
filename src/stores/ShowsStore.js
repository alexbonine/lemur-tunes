'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var shows = [  //todo move to server
    { id: '1', band: 'Modest Mouse', date: 'July 19', link: '', venue: 'P4K' , city: 'Chicago, IL' }, // price? sold out?
    { id: '2', band: 'The Bots', date: 'April 7', link: '', venue: 'Unknown', city: 'San Francisco, CA' },
    { id: '3', band: 'Diarrhea Planet', date: 'April 8', link: '', venue: 'Black Cat', city: 'Washington, DC' }
  ]

var setShows = function (newShows) {
  shows = newShows;
}

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

var ShowsStore = assign({}, EventEmitter.prototype, {

  getShows() {
    return shows;
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

ShowsStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.SHOWS_SET:
      setShows(action.location);
      ShowsStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

module.exports = ShowsStore;
