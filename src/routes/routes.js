'use strict'

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from '../pages/App';
import HomePage from '../pages/HomePage';
import PlaylistsPage from '../pages/PlaylistsPage';
import CalendarPage from '../pages/CalendarPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

module.exports = (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name='playlists' path='/playlists' handler={PlaylistsPage} />
    <Route name='calendar' path='/calendar' handler={CalendarPage} />
    <Route name='about' path='/about' handler={AboutPage} />
    <Route name='contact' path='/contact' handler={ContactPage} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);
