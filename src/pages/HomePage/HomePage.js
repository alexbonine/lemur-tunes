'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';

export default class HomePage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <p>Please note this page is a work in progress. See the About page for more information</p>
        <h5>As of April 3rd:  Found 14 playlists on Spotify with 320 songs from 303 bands.  Found 223 shows on Songkick in 3 cities.</h5>
      </div>
    );
  }

};