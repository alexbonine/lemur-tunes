'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import ShowsTabs from '../../components/ShowsTabs';
import './CalendarPage.less';

export default class CalendarPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  constructor(props) {
    super(props);
    this.state = this.getStateFromStores();
    this._onChange = this._onChange.bind(this);
  }

  getShows() {
    LemurTunesActions.requestShows();
  }

  getStateFromStores() {
    return {
      location: UserStore.getLocation(),
      shows: ShowsStore.getShows()
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);

    this.getShows();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
    ShowsStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <ShowsTabs location={this.state.location} shows={this.state.shows} />
    );
  }

  _onChange() {
    this.setState(this.getStateFromStores());
  }

};