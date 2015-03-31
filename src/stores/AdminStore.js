'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'change';

let addCity = '',
  snackbarMessage = '';

let setAddCity = function (newCity) {
  addCity = newCity;
}

let setSnackbarMessage = function (newSnackbarMessage) {
  snackbarMessage = newSnackbarMessage;
}

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

let AdminStore = assign({}, EventEmitter.prototype, {

  getAddCity() {
    return addCity;
  },

  getSnackbarMessage() {
    return snackbarMessage;
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

AdminStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.ADMIN_SET_NEW_CITY:
      setAddCity(action.newCity);
      AdminStore.emitChange();
      break;

    case ActionTypes.LEMURTUNES_CITIES_SUCCESS:
      setSnackbarMessage(action.response);
      AdminStore.emitChange();
      break;

    case ActionTypes.LEMURTUNES_CITIES_ERROR:
      setSnackbarMessage(action.error);
      AdminStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default AdminStore;
