'use strict';

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export default {
  toDateString: function (date) {
    return  (date.getMonth() + 1) + '/' + date.getDate(); //months[date.getMonth()]
  }
};