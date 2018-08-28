'use strict';

import moment from 'moment';

export default {
  toDateString: function (date) {
    return  moment(date).format('MMM YYYY');
  },
  toDateNumString: function (date) {
    return  moment(date).format('M/D');
  },
  toMonthDayString: function (date) {
    return moment(date).format('MMMM Do')
  }
};