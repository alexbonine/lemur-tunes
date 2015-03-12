'use strict'

import react from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from '../components/App';
import HomePage from '../components/HomePage';
import PlaylistsPage from '../components/PlaylistsPage';
import CalendarPage from '../components/CalendarPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import NotFoundRoute from '../components/NotFoundPage';

export default {
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={HomePage}>
    <Route name='playlists' path='/playlists' handler={PlaylistsPage}>
    <Route name='calendar' path='/calendar' handler={CalendarPage}>
    <Route name='about' path='/about' handler={AboutPage}>
    <Route name='contact' path='/contact' handler={ContactPage}>
    <NotFoundRoute handler={NotFoundPage}>
  </Route>
};