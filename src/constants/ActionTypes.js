/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import keyMirror from 'react/lib/keyMirror';

var ActionTypes = keyMirror({

  // LOAD_PAGE: null,
  // LOAD_PAGE_SUCCESS: null,
  // LOAD_PAGE_ERROR: null,
  CHANGE_LOCATION: null,
  // PLAYLISTS_SET: null,
  //SHOWS_SET: null,
  SHOWS_REQUEST: null,
  SONGKICK_SHOWS_SUCCESS: null,
  SONGKICK_SHOWS_ERROR: null

});

module.exports = ActionTypes;
