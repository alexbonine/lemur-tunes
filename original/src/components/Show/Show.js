'use strict'

import React, { Component, PropTypes } from 'react';
// import { PureRenderMixin } from 'react/addons';
import { Paper } from 'material-ui';
import Formatting from '../../utils/Formatting';
import './Show.less';

export default class Show extends Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    let show = this.props.show,
      dateStr = Formatting.toDateNumString(show.eventDate),
      billing = (show.billingIndex === 1) ? 'Headliner' : 'Support';

    return (
      <li className='Playlist'>
        <Paper zDepth={3} rounded={false}>
          <p><strong>{show.bandName}</strong> - {show.venue} - {dateStr} - {billing} - <a href={show.link} target='_blank'>Event</a></p>
        </Paper>
      </li>
    );
  }

};

Show.propTypes = {
  show: PropTypes.object.isRequired
}