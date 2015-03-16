'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    return (
      <p>About Page</p>
    );
  }

});