'use strict';

import APIUtils from './APIUtils';
import configAPI from '../constants/configAPI';
import SongkickAPIActions from '../actions/SongkickAPIActions';

var url = {
  userCalendar: 'http://api.songkick.com/api/3.0/users/lemurdev/calendar.json'
}

export default {
  requestShows: function () {
    var that = this;

    APIUtils.get(url.userCalendar,
      { reason: 'tracked_artist', apikey: configAPI.songkick.key },
      function (err, res) {
        //todo need to check for multiple pages and request if so - res.page > 1, paginate and request more
        // update store via dispatcher event
        if (!res.ok) {
          SongkickAPIActions.handleShowsError(res.text);
          return;
        } else {
          var response = that.formatShows(res.text);
          SongkickAPIActions.handleShowsSuccess(response);
        }
    });
  },
  formatShows: function (text) {
    var json = JSON.parse(text),
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