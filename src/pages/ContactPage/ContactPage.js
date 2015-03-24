'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';

export default class ContactPage extends React.Component {
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    return (
      <p>Contact Page</p>
    );
  }

};