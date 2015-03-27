'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import _ from 'lodash';
import { Tabs, Tab } from 'material-ui';
import Show from '../Show';
import './ShowsTabs.less';

export default class ShowsTabs extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  // onChangeTab: function (tabIndex, tab) {
  // },

  render() {
    var location = this.props.location,
      localShows = this.props.shows.filter(function (show) { //todo make immutable data sort mixin
        return show.city.search(location) > -1;
      }),
      onTourBands = _.chain(this.props.shows)
        .map(function (show) { return show.band })
        .uniq()
        .sortBy()
        .value();

    return (
      <div className='Shows'>
        <Tabs  tabWidth='100' onChange={this.onChangeTab}>
          <Tab label='Local Shows'>
            <ul>{localShows.map(function (show) {
              return <Show key={show.id} show={show} />;
            })}
            </ul>
          </Tab>
          <Tab label='On Tour' >
            <ul>{onTourBands.map(function (band, index) {
              return (<li key={index}><h4>{band}</h4></li>);
            })}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }

};

ShowsTabs.propTypes = {
  location: React.PropTypes.string.isRequired,
  shows: React.PropTypes.array.isRequired
};
