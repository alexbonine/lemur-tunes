'use strict';

var React = require('react'),
  reactRouter = require('react-router'),
  routes = require('./routes');
  
export default {
  router: null,
  renderToDom: function () {
    var router = reactRouter.create({  //todo setup isomorphic serving of pushstate
      location: reactRouter.HashLocation, // process.env.NODE_ENV === 'production' ? HashLocation : HistoryLocation,
      routes: routes
    });

    // Run the app
    // router.run(function (Handler, state) {
    //   React.render(React.createElement(Handler), document.body);
    // });
    router.run((Handler) => {
      React.render(<Handler/>, document.getElementById('root'));
    });

    this.router = router;

    return router;
  },
  renderToString: function(path) {
    var content;
    reactRouter.run(routes, path, function (Handler) {
      content = React.renderToString(React.createElement(Handler));
    });
    return content;
  }
};