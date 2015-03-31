'use strict'

import './Navbar.less';

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import LocationBar from '../LocationBar';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';
import LemurTunesActions from '../../actions/LemurTunesActions';

export default class Navbar extends React.Component {
  //mixins: [PureRenderMixin],  //agb immutable?
  constructor(props) {
    super(props);
    this.state = this.getStateFromStore();
    this._onChange = this._onChange.bind(this);
  }

  //todo from local cookie or user settings
  getStateFromStore() {
    return {
      //location: UserStore.getLocation(),
      locationOptions: UserStore.getLocationOptions()
    }
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);

    LemurTunesActions.requestLocationOptions();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div  className='Navbar'>
        <Toolbar>
          <ToolbarGroup key={0} float='left'>
            <Link to='home'><FlatButton label='Home' /></Link>
            <Link to='playlists'><FlatButton label='Playlists' /></Link>
            <Link to='calendar'><FlatButton label='Calendar' /></Link>
            <Link to='about'><FlatButton label='About' /></Link>
            <Link to='admin'><FlatButton label='Admin' /></Link>
          </ToolbarGroup>
          <ToolbarGroup key={1} float='right'>
            <LocationBar locationOptions={this.state.locationOptions} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }

  _onChange() {
    this.setState(this.getStateFromStore());
  }

};