'use strict'

import React from 'react';
import { Paper } from 'material-ui';
import './Song.less';

export default class Song extends React.Component {
  render() {
    return (
      <li>
        <Paper zDepth={3} rounded={false}>
          <p>{this.props.song.name} - {this.props.song.band}</p>
        </Paper>
      </li>
    );
  }
};

Song.propTypes = {
  song: React.PropTypes.object.isRequired
};