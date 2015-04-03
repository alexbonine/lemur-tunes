'use strict'

import React from 'react';

export default class ResultsPane extends React.Component {
  
  render() {
    let stringifyData = this.props.results// ? JSON.stringify(this.props.results) : '';
    return (
      <div>
        <h3>Results</h3>
        <p>{stringifyData}</p>
      </div>
    );
  }
}

// ResultsPane.propTypes = {
//   results: React.PropTypes.object.isRequired // could be string or object
// }