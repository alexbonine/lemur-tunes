import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class App extends Component {
  render() {
    return (
      <ul className="header">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
}

export default App;
