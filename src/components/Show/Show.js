'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import './Show.less';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  propTypes: {
    show: React.PropTypes.object.isRequired
  },

  render: function () {
    var show = this.props.show;
    return (
      <li className='Playlist'>
        <h4>{show.band} {show.date}</h4>
      </li>
    );
  }

});
