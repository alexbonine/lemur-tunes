'use strict'

import React from 'react';
import { Paper } from 'material-ui';
import './Song.less';

export default class Song extends React.Component {
  render() {
    let song = this.props.song;
    return (
      <li>
        <Paper zDepth={3} rounded={false}>
          <p><strong>{song.trackNumber} - <em>{song.name}</em> - {song.band} - </strong><a href={song.link} target='_blank'>Play</a></p>
        </Paper>
      </li>
    );
  }
};

Song.propTypes = {
  song: React.PropTypes.object.isRequired
};