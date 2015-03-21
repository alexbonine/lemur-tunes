'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import ShowsTabs from '../../components/ShowsTabs';
import './CalendarPage.less';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  getShows: function () {
    LemurTunesActions.requestShows();
  },

  getStateFromStores: function () {
    return {
      location: UserStore.getLocation(),
      shows: ShowsStore.getShows()
    };
  },

  getInitialState: function () {
    return this.getStateFromStores();
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);

    this.getShows();
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
    ShowsStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <ShowsTabs location={this.state.location} shows={this.state.shows} />
    );
  },

  _onChange: function () {
    this.setState(this.getStateFromStores());
  }

});