import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    const style = this.props.style || {};

    return (
      <ul className="header" style={style}>
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

export default Header;
