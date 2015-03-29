'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import Shows from '../Shows';
import Song from '../Song';
import './Playlist.less';

export default class Playlist extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    let playlist = this.props.playlist;
    let filteredShows = this.props.shows.filter(function (show) { //todo make immutable data sort mixin
        return playlist.songs.some(function (song) {
          if (song.band === show.band) {
            return true;
          }
        });
    });

    return (
      <li className='Playlist'>
        <h2>{playlist.title} - {playlist.date}</h2>
        <div className='row'>
          <div className='col-sm-6'>  {/* //agb remove below 542px wide? maybe just link or band list? */ }
            <ol>{playlist.songs.map(function (song, index) {
              return <Song key={index} song={song} />;
            })}
            </ol>
          </div>
          <div className='col-sm-6'>
            <iframe src={playlist.link} width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
            <Shows location={this.props.location} shows={filteredShows} />
          </div>
        </div>
      </li>
    );
  }

};

Playlist.propTypes = {
  location: React.PropTypes.string.isRequired,
  playlist: React.PropTypes.object.isRequired,
  shows: React.PropTypes.array.isRequired
};