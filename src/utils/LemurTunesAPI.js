'use strict';

import APIUtils from './APIUtils';
import LemurTunesAPIActions from '../actions/LemurTunesAPIActions';

const base = 'http://localhost:10888/api';//'http://music.alexbonine.com/'
const urls = {
  playlists: base + '/playlists',
  cities: base + '/cities',
  shows: base + '/shows',
};

export default {
  requestPlaylists: function () {
    APIUtils.get(urls.playlists,
      {},
      function (err, res) {
        // update store via dispatcher event
        if (!res || !res.ok) {
          LemurTunesAPIActions.handlePlaylistsError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handlePlaylistsSuccess(JSON.parse(res.text));
        }
    });
  },
  requestLocationOptions: function () {
    APIUtils.get(urls.cities,
      {},
      function (err, res) {
        // update store via dispatcher event
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleLocationOptionsError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handleLocationOptionsSuccess(JSON.parse(res.text));
        }
    });
  },
  requestShows: function () {
    APIUtils.get(urls.shows,
      {},
      function (err, res) {
        // update store via dispatcher event
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleShowsError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handleShowsSuccess(JSON.parse(res.text));
        }
    });
  },
  addCity: function (city, state) {
    APIUtils.post(urls.cities,
      { city: city, state: state },
      function (err, res) {
        debugger
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleCitiesError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handleCitiesSuccess(res);
        }
      });
  }
}