'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import Playlist from '../../components/Playlist';
import UserStore from '../../stores/UserStore';
import PlaylistStore from '../../stores/PlaylistStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import WrappedDropdown from '../../components/WrappedDropdown';
import './PlaylistsPage.less';

export default class PlaylistsPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?
  constructor(props) {
    super(props);
    this.state = this.getStateFromStores();
    this._onChange = this._onChange.bind(this);
  }

  getAllData() {
    //LemurTunesActions.requestShows();
    LemurTunesActions.requestPlaylists(false);
  }

  getStateFromStores() {
    return {
      location: UserStore.getLocation(),
      playlists: PlaylistStore.getPlaylists(),
      shows: ShowsStore.getShows(),
      playlistOptions: PlaylistStore.getPlaylistOpitons(),
      playlistSelected: PlaylistStore.getPlaylist()
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
    PlaylistStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);

    if (!this.state.playlists.length) {
      LemurTunesActions.requestPlaylists(true);
      setTimeout(function () {
        LemurTunesActions.requestPlaylists(false);
      }, 500);
    }
    if (!this.state.shows.length) {
      LemurTunesActions.requestShows();
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.parseFullName(nextProps) !== this.parseFullName(this.props)) {
  //     this.setState(this.getStateFromStores(nextProps));
  //     this.repoDidChange(nextProps);
  //   }
  // },

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
    PlaylistStore.removeChangeListener(this._onChange);
    ShowsStore.removeChangeListener(this._onChange);
  }

  render() {
    //todo anonymously pass props
    let state = this.state;
    let renderedPlaylists = [];

    // limit playlists rendered if there is only one selected
    if (state.playlistSelected > 0 && state.playlists.length) {
      renderedPlaylists.push(state.playlists[state.playlistSelected - 1]);
    } else {
      renderedPlaylists = state.playlists;
    }

    return (
      <div className='PlaylistsPage'>
        <WrappedDropdown className='Playlists' options={state.playlistOptions} handleChange={this.handlePlaylistChange.bind(this)} selectedIndex={state.playlistSelected} baseSize={1} />
        <ol>{renderedPlaylists.map(function (playlist) {
          return <Playlist key={playlist.playlistId} location={state.location} playlist={playlist} shows={state.shows} />;
        })}
        </ol>
      </div>
    );
  }

  _onChange() {
    this.setState(this.getStateFromStores());
  }

  handlePlaylistChange(e, selectedIndex, menuItem) {
    e.preventDefault();
    LemurTunesActions.setPlaylist(menuItem.payload);
  }

};