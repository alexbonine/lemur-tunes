'use strict';

// import './App.less';

import React from 'react';
import Navbar from '../../components/Navbar';
import LocationBar from '../../components/LocationBar';
import { RouteHandler, Link } from 'react-router';

export default React.createClass({

  render: function() {
    return (
      <div className='App'>
        <Navbar />
        <LocationBar />
        <RouteHandler />
      </div>
    );
  }

});