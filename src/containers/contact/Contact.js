import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/lemur.svg';
import './Contact.css';

class Contact extends Component {
  render() {
    const style = this.props.style || {};

    return (
      <div className="contact-container" style={style}>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Lemur Tunes</h1>
        </header>
        <p className="app-intro">Contact</p>
        <Link to="/" className="app-link">
          Home
        </Link>
        <Link to="/about" className="app-link">
          About
        </Link>
        <div style={{ display: 'none' }}>
          Icons made by{' '}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
