'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import './AboutPage.less'

export default class AboutPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    //todo serve via jade from the server
    var paragraphOne = 'TBD';
    return (
      <div className='AboutPage'>
        <h2>A little about this site</h2>
        <p>{paragraphOne}</p>
      </div>
    );
  }

};