'use strict';

import APIUtils from './APIUtils';
import configAPI from '../constants/configAPI';
import SongkickAPIActions from '../actions/SongkickAPIActions';

const urls = {
  userCalendar: 'http://api.songkick.com/api/3.0/users/lemurdev/calendar.json'
}

export default {
  requestShows: function () {
    let that = this;

    APIUtils.get(urls.userCalendar,
      { reason: 'tracked_artist', apikey: configAPI.songkick.key },
      function (err, res) {
        //todo need to check for multiple pages and request if so - res.page > 1, paginate and request more
        // update store via dispatcher event
        if (!res || !res.ok) {
          SongkickAPIActions.handleShowsError(err.message);
          return;
        } else {
          let response = that.formatShows(res.text);
          SongkickAPIActions.handleShowsSuccess(response);
        }
    });
  },
  formatShows: function (text) {
    let json = JSON.parse(text),
      entries = json.resultsPage.results.calendarEntry,
      array = [];

    return entries.map(function (entry, index) {
      return {
        id: index + 1,
        onTour: entry.reason.trackedArtist[0].onTourUntil ? true : false, // could probably just set true
        bandPage: entry.reason.trackedArtist[0].uri,
        band: entry.reason.trackedArtist[0].displayName,
        eventDate: entry.event.start.date,
        metroArea: entry.event.venue.metroArea.displayName,
        venue: entry.event.venue.displayName,
        city: entry.event.location.city,
        eventPage: entry.event.uri,
        eventName: entry.event.displayName
      };
    });

    return array;
  }
};