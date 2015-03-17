'use strict';

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export default {
  toDateString: function (date) {
    return months[date.getMonth()] + ' ' + date.getDate();
  }
};