'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    return (
    // <Toolbar>
    //   <ToolbarGroup key={0} float='left'>
    //     <Link to='home'><FlatButton label='Home' /></Link>
    //     <Link to='playlists'><FlatButton label='Playlists' /></Link>
    //     <Link to='calendar'><FlatButton label='Calendar' /></Link>
    //   </ToolbarGroup>
    //   <ToolbarGroup key={1} float='right'>
    //     <Link to='about'><FlatButton label='About' /></Link>
    //     <Link to='contact'><FlatButton label='Contact' /></Link>
    //   </ToolbarGroup>
    // </Toolbar>
      <h1>Navbar</h1>
      // <Link to="about">About</Link>
    );
  }
});