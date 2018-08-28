'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  handleShowsSuccess(response) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.SONGKICK_SHOWS_SUCCESS,
      shows: response
    })
  },
  handleShowsError(error) {
    console.log('Songkick Shows error: ' + error);

    Dispatcher.handleServerAction({
      actionType: ActionTypes.SONGKICK_SHOWS_ERROR//,
      //location: location
    })
  }
}