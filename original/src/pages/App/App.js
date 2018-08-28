'use strict';

// import './App.less';

import React from 'react';
import Navbar from '../../components/Navbar';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Navbar />
        <RouteHandler />
      </div>
    );
  }

};
