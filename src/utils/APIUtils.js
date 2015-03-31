'use strict';

import request from 'superagent';

export default {
  get: function (url, query, callback) {
    request.get(url)
      .query(query)
      .end(callback);
  },

  post: function (url, data, callback) {
    request.post(url)
      .set('Content-Type', 'application/json')
      .send(data)
      .end(callback);
  }
};