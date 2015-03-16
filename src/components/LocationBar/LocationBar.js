'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import { Toolbar, ToolbarGroup, DropDownMenu } from 'material-ui';
import './LocationBar.less'

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
    LemurTunesActions.setLocation(menuItem.text);
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
      <div className='LocationBar'>
        <Toolbar>
          <ToolbarGroup key={0} float='right'>
            <DropDownMenu menuItems={this.state.locationOptions} onChange={this.handleLocationChange} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  }
});
