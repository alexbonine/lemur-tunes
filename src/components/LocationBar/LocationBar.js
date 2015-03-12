'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
//import { Toolbar, ToolbarGroup, DropdownMenu } from 'material-ui';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  //todo from local cookie or user settings
  getStateFromStore: function () {
    return {
      location: UserStore.getLocation(),
      locationOptions: UserStore.getLocationOptions()
    }
  },

  handleLocationChange: function (e, selectedIndex, menuItem) {
    e.preventDefault();
    LemurTunesActions.setLocation(menuItem);
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      // <Toolbar>
      //   <ToolbarGroup key={0} float='right'>
          {/*<DropdownMenu menuItems={this.props.locationOptions} onChange={this.handleLocationChange} />*/}
      //   </ToolbarGroup>
      // </Toolbar>
      <h2>LocationBar</h2>
    );
  },

  _onChange: function () {
    this.setState(getStateFromStore());
  }
});