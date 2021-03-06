'use strict';

import APIUtils from './APIUtils';
import LemurTunesAPIActions from '../actions/LemurTunesAPIActions';

const base = 'http://music.alexbonine.com/api/';
const urls = {
  playlists: base + 'playlists',
  cities: base + 'cities',
  shows: base + 'shows',
  updateShowsDb: base + 'updateshowsdb',
  verifysongkick: base + 'verifysongkick',
  importalldata: base + 'importalldata',
  dbStats: base + 'dbstats'
};

export default {
  requestPlaylists: function (initialData) {
    APIUtils.get(urls.playlists,
      {'initial': initialData},
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
  requestShows: function (limit, offset) {
    APIUtils.get(urls.shows,
      {'limit': limit, 'offset': offset},
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
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleCitiesError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handleCitiesSuccess(res);
        }
      });
  },
  verifySongkick: function () { // todo - make POST
    APIUtils.get(urls.verifysongkick,
      {},
      function (err, res) {
        if (!res || !res.ok) {
          // LemurTunesAPIActions.handleVerifySongkickError(err.message);
          LemurTunesAPIActions.handleAdminError(err.message);
        } else {
          // LemurTunesAPIActions.handleVerifySongkickSuccess(JSON.parse(res.text));
          LemurTunesAPIActions.handleAdminSuccess(JSON.parse(res.text));
        }
      });
  },
  importAllData: function (username, cities, shows, playlists, songs, bands) { // todo - make POST
    APIUtils.get(urls.importalldata,
      {'username': username, 'cities': cities, 'shows': shows, 'playlists': playlists, 'songs': songs, 'bands': bands},
      function (err, res) {
        if (!res || !res.ok) {
          // LemurTunesAPIActions.handleImportAllDataError(err.message);
          var response = (err.response) ?  ' - ' + JSON.parse(err.response.text) : '';
          LemurTunesAPIActions.handleAdminError(err.message + response);
        } else {
          // LemurTunesAPIActions.handleImportAllDataSuccess(JSON.parse(res.text));
          LemurTunesAPIActions.handleAdminSuccess(JSON.parse(res.text));
        }
      });
  },
  updateShowsDb: function () {  // todo - make POST
    APIUtils.get(urls.updateShowsDb,
      {},
      function (err, res) {
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleAdminError(err.message);
        } else {
          LemurTunesAPIActions.handleAdminSuccess(JSON.parse(res.text));
        }
      });
  },
  requestDbStats: function () {
    APIUtils.get(urls.dbStats,
      {},
      function (err, res) {
        if (!res || !res.ok) {
          LemurTunesAPIActions.handleDbStatsError(err.message);
        } else {
          LemurTunesAPIActions.handleDbStatsSuccess(JSON.parse(res.text));
        }
      });
  }
}