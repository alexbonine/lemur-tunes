'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  render: function () {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float='left'>
          <FlatButton label='primary'><Link to='home'></Link></FlatButton>
          <FlatButton label='primary'><Link to='Playlists'></Link></FlatButton>
          <FlatButton label='primary'><Link to='Shows'></Link></FlatButton>
        </ToolbarGroup>
        <ToolbarGroup key={1} float='right'>
          <FlatButton label='primary'><Link to='about'>About</Link></FlatButton>
          <FlatButton label='primary'><Link to='contact'>Contact</Link></FlatButton>
        </ToolbarGroup>
      </Toolbar>
    );
  },
});
