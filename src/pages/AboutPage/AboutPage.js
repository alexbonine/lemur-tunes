'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import './AboutPage.less'

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    //todo serve via jade from the server
    var paragraphOne = 'TBD';
    return (
      <div className='AboutPage'>
        <h2>A little about this site</h2>
        <p>{paragraphOne}</p>
      </div>
    );
  }

});