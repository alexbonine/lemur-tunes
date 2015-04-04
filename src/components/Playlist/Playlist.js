'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import Shows from '../Shows';
import Song from '../Song';
import Formatting from '../../utils/Formatting';
import './Playlist.less';

export default class Playlist extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    let playlist = this.props.playlist;
    let date = Formatting.toDateString(new Date(playlist.date))
    let filteredShows = this.props.shows.filter(function (show) { //todo make immutable data sort mixin
        return playlist.songs.some(function (song) {
          if (song.band === show.bandName) {
            return true;
          }
        });
    });

    return (
      <li className='Playlist containter'>
        <h2>{playlist.name} - {date}</h2>
        <div className='row'>
          <div className='col-sm-6'>  {/* //agb remove below 542px wide? maybe just link or band list? */ }
            <ol>{playlist.songs.map(function (song, index) {
              return <Song key={index} song={song} />;
            })}
            </ol>
          </div>
          <div className='col-sm-6'>
            <h5><a href={playlist.link} target='_blank'>Listen on Spotify!</a></h5> {/* todo switch to launch app */}
            <Shows location={this.props.location} shows={filteredShows} />
          </div>
        </div>
      </li>
    );
  }
// <iframe src={playlist.link} width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
};

Playlist.propTypes = {
  location: React.PropTypes.string.isRequired,
  playlist: React.PropTypes.object.isRequired,
  shows: React.PropTypes.array.isRequired
};