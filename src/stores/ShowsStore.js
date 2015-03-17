'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

// var shows = [
//     { id: 1, onTour: true, bandPage: 'http://www.songkick.com/artists/3927026-moon-hooch?utm_source=33007&utm_medium=partner', band: 'Modest Mouse', eventDate: '2015-07-19', metroArea: 'Chicago', venue: 'Union Park', city: 'Chicago, IL, US', eventPage: 'http://www.songkick.com/concerts/22813118-moon-hooch-at-catalyst?utm_source=33007&utm_medium=partner', eventName: 'Modest Mouse at Union Park (July 19, 2015)' },
//     { id: 2, onTour: true, bandPage: 'http://www.songkick.com/artists/3927026-moon-hooch?utm_source=33007&utm_medium=partner', band: 'The Bots', eventDate: '2015-07-19', metroArea: 'SF Bay Area', venue: 'Filmore', city: 'San Francisco, CA, US', eventPage: 'http://www.songkick.com/concerts/22813118-moon-hooch-at-catalyst?utm_source=33007&utm_medium=partner', eventName: 'The Bots at THe Filmore (July 19, 2015)' },
//     { id: 3, onTour: true, bandPage: 'http://www.songkick.com/artists/3927026-moon-hooch?utm_source=33007&utm_medium=partner', band: 'Diarrhea Planet', eventDate: '2015-07-19', metroArea: 'Washington', venue: 'Black Cat', city: 'Washington, DC, US', eventPage: 'http://www.songkick.com/concerts/22813118-moon-hooch-at-catalyst?utm_source=33007&utm_medium=partner', eventName: 'Diarrhea Planet at Black Cat (July 19, 2015)' }
//   ];
var shows = [];
var showsLocation = 'Chicago';

var setShows = function (newShows) {
  shows = newShows;
}

var setShowsLocation = function (newLocation) {
  showsLocation = newLocation;
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

    // case ActionTypes.CHANGE_LOCATION:
    //   setShowsLocation(action.location);
    //   ShowsStore.emitChange();
    //   break;

    case ActionTypes.SONGKICK_SHOWS_SUCCESS:
      setShows(action.shows);
      ShowsStore.emitChange();
      break;

    // case ActionTypes.SONGKICK_SHOWS_ERROR:
    //   //setShows(response.);
    //   ShowsStore.emitChange();
    //   break;

    default:
      // Do nothing
  }

});

module.exports = ShowsStore;
