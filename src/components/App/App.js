'use strict';

// import './App.less';

import React from 'react';
import Navbar from '../Navbar';
import LocationBar from '../LocationBar';
import { RouteHandler, Link } from 'react-router';

export default React.createClass({

  render: function() {
    return (
      <div className='App'>
      <Link to="about">About</Link>
        <Navbar />
        <LocationBar />
        <RouteHandler />
      </div>
    );
  }

});
