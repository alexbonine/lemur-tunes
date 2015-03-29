'use strict';

import APIUtils from './APIUtils';
import LemurTunesAPIActions from '../actions/LemurTunesAPIActions';

const urls = {
  playlists: 'http://localhost:10888/api/playlists' // 'http://music.alexbonine.com/api/playlists'
};

export default {
  requestPlaylists: function () {
    // let that = this;

    APIUtils.get(urls.playlists,
      {},
      function (err, res) {
        // update store via dispatcher event
        if (!res || !res.ok) {
          LemurTunesAPIActions.handlePlaylistsError(err.message);
          return;
        } else {
          LemurTunesAPIActions.handlePlaylistsSuccess(JSON.parse(res.text).playlists);
        }
    });
  }
}