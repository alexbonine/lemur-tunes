'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import LemurTunesActions from '../../actions/LemurTunesActions';
import { DropDownMenu } from 'material-ui';
import './LocationBar.less'

export default class LocationBar extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  handleLocationChange(e, selectedIndex, menuItem) {
    e.preventDefault();
    LemurTunesActions.setLocation(menuItem.text);
  }

  render() {
    return (
      <DropDownMenu className='LocationBar' menuItems={this.props.locationOptions} onChange={this.handleLocationChange} />
    );
  }
};
