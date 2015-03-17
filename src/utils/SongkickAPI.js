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

    for (var i = 0; i < entries.length; i++) {
      array.push({
        id: i + 1,
        onTour: entries[i].reason.trackedArtist[0].onTourUntil ? true : false, // could probably just set true
        bandPage: entries[i].reason.trackedArtist[0].uri,
        band: entries[i].reason.trackedArtist[0].displayName,
        eventDate: entries[i].event.start.date,
        metroArea: entries[i].event.venue.metroArea.displayName,
        venue: entries[i].event.venue.displayName,
        city: entries[i].event.location.city,
        eventPage: entries[i].event.uri,
        eventName: entries[i].event.displayName
      });
    }

    return array;
  }
};