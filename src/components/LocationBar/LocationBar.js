'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import LemurTunesActions from '../../actions/LemurTunesActions';
import { DropDownMenu } from 'material-ui';
import './LocationBar.less'

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  handleLocationChange: function (e, selectedIndex, menuItem) {
    e.preventDefault();
    LemurTunesActions.setLocation(menuItem.text);
  },

  render: function () {
    return (
      <DropDownMenu className='LocationBar' menuItems={this.props.locationOptions} onChange={this.handleLocationChange} />
    );
  }
});
