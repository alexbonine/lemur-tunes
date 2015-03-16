'use strict'

import React from 'react';
import { PureRenderMixin } from 'react/addons';
import { Tabs, Tab } from 'material-ui';
import Show from '../Show';
import './Shows.less';

export default React.createClass({
  mixins: [PureRenderMixin],  //agb immutable?

  propTypes: {
    location: React.PropTypes.string.isRequired,
    shows: React.PropTypes.array.isRequired
  },

  // onChangeTab: function (tabIndex, tab) {
  //   debugger;
  // },

  render: function () {
    var location = this.props.location,
      filteredShows = this.props.shows.filter(function (show) {
        return show.city.search(location) > -1;
      });
    return (
      <div className='Shows'>
        <h3>Local Shows</h3>
        <ul>{filteredShows.map(function (show) {
          return <Show key={show.id} show={show} />;
        })}
        </ul>
        {/*<Tabs  tabWidth='100' onChange={this.onChangeTab}>
          <Tab label='Local Shows'>
            <h3>Nearby</h3>
          </Tab>
          <Tab label='On Tour' >
            <h3>No local shows</h3>
          </Tab>
        </Tabs>*/}
      </div>
    );
  }

});
