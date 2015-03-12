'use strict';

import './App.less';

import React from 'react';
//import Navbar from '../Navbar';
//import LocationBar from '../LocationBar';
// import HomePage from '../HomePage';
import { RouteHandler } from 'react-router';

export default React.createClass({

  render() {
    return (
      <div className='App'>
        {/*<Navbar />*/}
      {/*<LocationBar />*/}
        <RouteHandler />
      </div>
    );
  }

});
