'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';

export default class HomePage extends React.Component {
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    return (
      <p>Home Page</p>
    );
  }

};