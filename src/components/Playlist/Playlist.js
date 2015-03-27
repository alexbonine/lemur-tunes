'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import Shows from '../Shows';
import './Playlist.less';

export default class Playlist extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    var playlist = this.props.playlist;
    return (
      <li className='Playlist'>
        <h2>{playlist.name}</h2>
        <h3>{playlist.date}</h3>
        <div className='row'>
          <div className='col-sm-6'>  {/* //agb remove below 542px wide? maybe just link or band list? */ }
            <div className='embed-container'>
              <iframe src={playlist.embedSrc} frameborder='0' allowtransparency='true' align='center'></iframe>
            </div>
          </div>
          <div className='col-sm-6'>
           <Shows location={this.props.location} shows={this.props.shows} />
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