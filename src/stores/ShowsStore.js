'use strict';

import moment from 'moment';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

let CHANGE_EVENT = 'change';

let shows = [];
let showsLocation = 'Chicago';
let calendarDateSelected = '30 Days';
let calendarDateIndexSelected = 0;
let dateOptions = [];
let defaultDateOptions = [
  { payload: 0, text: '30 Days' },
  { payload: 1, text: 'All' }
];

let setShows = function (newShows) {
  shows = newShows;  // overwrite or keep 30 day?
};

let setShowsLocation = function (newLocation) {  // no get?
  showsLocation = newLocation;
};

let setCalendarDateSelected = function (text) {
  calendarDateSelected = text;
};

let setCalendarDateIndexSelected = function (index) {
  calendarDateIndexSelected = index;
};

let setDateOptions = function (shows) {
  if (shows.length) {
    dateOptions = [];
    for (let i = 0; i < defaultDateOptions.length; i++) {
      dateOptions.push(defaultDateOptions[i]);
    }
    let lastDate = moment(shows[shows.length - 1].eventDate);
    let months = lastDate.diff(moment(), 'months');
    for (let i = 0; i < months; i++) {
      dateOptions.push({ payload: i+2, text: moment().add(i, 'M').format('MMMM') });
    }
  }
};

// if (__SERVER__) {
//   pages['/'] = {title: 'Home Page'};
//   pages['/privacy'] = {title: 'Privacy Policy'};
// }
let ShowsStore = assign({}, EventEmitter.prototype, {

  getShows() {
    return shows;
  },

  getCalendarDateSelected() {
    return calendarDateSelected;
  },

  getCalendarDateIndexSelected() {
    return calendarDateIndexSelected;
  },

  getDateOptions() {
    return dateOptions;
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
  let action = payload.action;

  switch (action.actionType) {

    // case ActionTypes.CHANGE_LOCATION:
    //   setShowsLocation(action.location);
    //   ShowsStore.emitChange();
    //   break;
    case ActionTypes.CHANGE_CALENDAR_DATE:
      setCalendarDateSelected(action.text);
      setCalendarDateIndexSelected(action.index);
      ShowsStore.emitChange();
      break;

    // case ActionTypes.SONGKICK_SHOWS_SUCCESS:
    //   setShows(action.shows);
    //   ShowsStore.emitChange();
    //   break;

    case ActionTypes.LEMURTUNES_SHOWS_SUCCESS:
      setShows(action.shows);
      setDateOptions(action.shows);
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

export default ShowsStore;