'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import { Tabs, Tab } from 'material-ui';
import Show from '../Show';
import './Shows.less';

export default class Shows extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  // onChangeTab: function (tabIndex, tab) {
  //   debugger;
  // },

  render() {
    let location = this.props.location,
      filteredShows = this.props.shows.filter(function (show) { //todo make immutable data sort mixin
        return show.city.search(location) > -1;
      });

    return (
      <div className='Shows'>
        <h3>Local Shows</h3>
        <ol>{filteredShows.map(function (show, index) {
          return <Show key={index} show={show} />;
        })}
        </ol>
      </div>
    );
  }

};

Shows.propTypes = {
  location: React.PropTypes.string.isRequired,
  shows: React.PropTypes.array.isRequired
};