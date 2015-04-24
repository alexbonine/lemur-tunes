'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'change';

let dbStats;

let setDbStats = function (stats) {
  dbStats = stats;
}

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }

let StatsStore = assign({}, EventEmitter.prototype, {

  getDbStats() {
    return dbStats;
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

StatsStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.LEMURTUNES_DATABASE_STATS_SUCCESS:
      setDbStats(action.stats);
      StatsStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default StatsStore;