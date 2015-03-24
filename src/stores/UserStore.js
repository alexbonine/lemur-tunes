'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var location = 'Chicago',
  locationOptions = [  //todo move to server
    { payload: '1', text: 'Chicago' },
    { payload: '2', text: 'San Francisco' },
    { payload: '3', text: 'Washington, DC' }
  ]

var setLocation = function (newLocation) {
  location = newLocation;
}

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

var UserStore = assign({}, EventEmitter.prototype, {

  getLocation() {
    return location;
  },

  getLocationOptions() {
    return locationOptions;
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

UserStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.CHANGE_LOCATION:
      setLocation(action.location);
      UserStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default UserStore;
