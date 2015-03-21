'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import Playlist from '../../components/Playlist';
import UserStore from '../../stores/UserStore';
import PlaylistStore from '../../stores/PlaylistStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import './PlaylistsPage.less';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  getShows: function () {
    LemurTunesActions.requestShows();
  },

  getStateFromStores: function () {
    return {
      location: UserStore.getLocation(),
      playlists: PlaylistStore.getPlaylists(),
      shows: ShowsStore.getShows()
    };
  },

  getInitialState: function () {
    return this.getStateFromStores();
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
    PlaylistStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);

    this.getShows();
  },

  // componentWillReceiveProps(nextProps) {
  //   if (this.parseFullName(nextProps) !== this.parseFullName(this.props)) {
  //     this.setState(this.getStateFromStores(nextProps));
  //     this.repoDidChange(nextProps);
  //   }
  // },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
    PlaylistStore.removeChangeListener(this._onChange);
    ShowsStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var location = this.state.location,
      shows = this.state.shows;
    //todo anonymously pass props
    return (
      <div className='PlaylistsPage'>
        <ol>{this.state.playlists.map(function (playlist) {
          return <Playlist key={playlist.id} location={location} playlist={playlist} shows={shows} />;
        })}
        </ol>
      </div>
    );
  },

  _onChange: function () {
    this.setState(this.getStateFromStores());
  }

});