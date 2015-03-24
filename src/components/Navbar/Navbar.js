'use strict'

import './Navbar.less';

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import LocationBar from '../LocationBar';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';

export default class Navbar extends React.Component {
  mixins: [PureRenderMixin],  //agb immutable?

  //todo from local cookie or user settings
  getStateFromStore: function () {
    return {
      //location: UserStore.getLocation(),
      locationOptions: UserStore.getLocationOptions()
    }
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
      <div  className='Navbar'>
        <Toolbar>
          <ToolbarGroup key={0} float='left'>
            <Link to='home'><FlatButton label='Home' /></Link>
            <Link to='playlists'><FlatButton label='Playlists' /></Link>
            <Link to='calendar'><FlatButton label='Calendar' /></Link>
            <Link to='about'><FlatButton label='About' /></Link>
          </ToolbarGroup>
          <ToolbarGroup key={1} float='right'>
            <LocationBar locationOptions={this.state.locationOptions} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  }

};