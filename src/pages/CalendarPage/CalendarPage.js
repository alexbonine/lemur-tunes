'use strict'

import React, {Component} from 'react';
import moment from 'moment';
// import { PureRenderMixin } from 'react/addons';
import UserStore from '../../stores/UserStore';
import ShowsStore from '../../stores/ShowsStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import Show from '../../components/Show';
import WrappedDropdown from '../../components/WrappedDropdown';
import './CalendarPage.less';

export default class CalendarPage extends Component {
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
      shows: ShowsStore.getShows(),
      dateOptions: ShowsStore.getDateOptions(),
      dateSelected: ShowsStore.getCalendarDateSelected(),
      dateIndex: ShowsStore.getCalendarDateIndexSelected()
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
    ShowsStore.addChangeListener(this._onChange);
    
    if (!this.state.shows.length) {
      LemurTunesActions.requestShows(30);
      setTimeout(function () {
        LemurTunesActions.requestShows();
      }, 500);
    }
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
    ShowsStore.removeChangeListener(this._onChange);
  }

  render() {
    let location = this.state.location,
      dateRange = this._determineDateRange(this.state.dateSelected),
      localShows = this.state.shows.filter(function (show) { //todo make immutable data sort mixin
        return show.city.search(location) > -1 && moment(show.eventDate).isBetween(dateRange.min, dateRange.max);
      });

    return (
      <div className='CalendarPage'>
        <WrappedDropdown className='Calendar' options={this.state.dateOptions} handleChange={this.handleDateChange.bind(this)} selectedIndex={this.state.dateIndex} baseSize={2} />
        <ul>{localShows.map(function (show, index) {
          return <Show key={index} show={show} />;
        })}
        </ul>
      </div>
    );
  }

  _onChange() {
    this.setState(this.getStateFromStores());
  }

  _determineDateRange(text) {
    let yesterday = moment().subtract(1, 'd');  // isBetween uses absolute midnight dates so use yesterday
    if (text === '30 Days') {
      return {min: yesterday, max: moment().add(30, 'd')};
    } else if (text === 'All') {
      return {min: yesterday, max: moment().add(1, 'y')};
    } else {
      return {min: moment().month(text).date(1).subtract(1,'d'), max: moment().month(text).endOf('month')};
    }
  }

  handleDateChange(e, selectedIndex, menuItem) {
    e.preventDefault();
    LemurTunesActions.setCalendarDateSelected(selectedIndex, menuItem.text);
  }

};