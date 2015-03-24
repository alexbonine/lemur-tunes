'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import Formatting from '../../utils/Formatting';
import './Show.less';

export default class Show extends React.Component {
  mixins: [PureRenderMixin],  //agb immutable?

// { id: 1, onTour: true, bandPage: 'http://www.songkick.com/artists/3927026-moon-hooch?utm_source=33007&utm_medium=partner', band: 'Modest Mouse', eventDate: '2015-07-19', metroArea: 'Chicago', venue: 'Union Park', city: 'Chicago, IL, US', eventPage: 'http://www.songkick.com/concerts/22813118-moon-hooch-at-catalyst?utm_source=33007&utm_medium=partner', eventName: 'Modest Mouse at Union Park (July 19, 2015)' }
  render: function () {
    var show = this.props.show,
      dateStr = Formatting.toDateString(new Date(show.eventDate));

    return (
      <li className='Playlist'>
        <h4>{show.band} at {show.venue} - {dateStr}</h4>
      </li>
    );
  }

};

Show.propTypes: {
  show: React.PropTypes.object.isRequired
}