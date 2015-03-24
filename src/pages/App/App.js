'use strict';

// import './App.less';

import React from 'react';
import Navbar from '../../components/Navbar';
import LocationBar from '../../components/LocationBar';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {

  render: function() {
    return (
      <div className='App'>
        <Navbar />
        <RouteHandler />
      </div>
    );
  }

};
