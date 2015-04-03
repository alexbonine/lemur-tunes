'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import Playlist from '../../components/Playlist';
import UserStore from '../../stores/UserStore';
import PlaylistStore from '../../stores/PlaylistStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import './PlaylistsPage.less';

export default class PlaylistsPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?
  constructor(props) {
    super(props);
    this.state = this.getStateFromStores();
    this._onChange = this._onChange.bind(this);
  }

  getData() {
    LemurTunesActions.requestShows();
    LemurTunesActions.requestPlaylists();
  }

  getStateFromStores() {
    return {
      location: UserStore.getLocation(),
      playlists: PlaylistStore.getPlaylists(),
      shows: ShowsStore.getShows()
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
    PlaylistStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);

    this.getData();
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

    return (
      <div className='PlaylistsPage'>
        <ol>{state.playlists.map(function (playlist) {
          return <Playlist key={playlist.playlistId} location={state.location} playlist={playlist} shows={state.shows} />;
        })}
        </ol>
      </div>
    );
  }

  _onChange() {
    this.setState(this.getStateFromStores());
  }

};