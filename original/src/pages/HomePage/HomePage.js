'use strict'

import React, {Component} from 'react';
import moment from 'moment';
import StatsStore from '../../stores/StatsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import Formatting from '../../utils/Formatting';
import './HomePage.less'
// import { PureRenderMixin } from 'react/addons';

export default class HomePage extends Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  constructor(props) {
    super(props);
    this.state = this.getStateFromStore();
    this._onChange = this._onChange.bind(this);
  }

  getStateFromStore() {
    return {
      stats: StatsStore.getDbStats()
    };
  }

  componentDidMount() {
    StatsStore.addChangeListener(this._onChange);

    if (!this.state.stats) {
      LemurTunesActions.requestDbStats();
    }
    // todo Cache results to increase perceived speed until switch to Node
    LemurTunesActions.requestPlaylists();
    LemurTunesActions.requestShows();
  }

  componentWillUnmount() {
    StatsStore.removeChangeListener(this._onChange);
  }

  render() {
    let stats = this.state.stats,
      date = Formatting.toMonthDayString(new Date()),
      statsData;

    if (stats) {
      statsData = <div>
                    <h5>As of {date}, found:</h5>
                    <ul>
                      <li className='db-stats'>Shows: {stats.shows}</li>
                      <li className='db-stats'>Bands: {stats.bands}</li>
                      <li className='db-stats'>Playlists: {stats.playlists}</li>
                      <li className='db-stats'>Songs: {stats.songs}</li>
                      <li className='db-stats'>Cities: {stats.cities}</li>
                    </ul>
                  </div>;
    } else {
      statsData = null;
    }

    return (
      <div className='HomePage'>
        <h3>Home Page</h3>
        <p>Please note this page is a work in progress. See the About page for more information</p>
        {statsData}
      </div>
    );
  }

  _onChange() {
    this.setState(this.getStateFromStore());
  }

};