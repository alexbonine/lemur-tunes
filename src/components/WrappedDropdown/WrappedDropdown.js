'use strict'

import React, {Component} from 'react';
import LemurTunesActions from '../../actions/LemurTunesActions';
import { DropDownMenu } from 'material-ui';
import './WrappedDropdown.less'

/* Component created to get around lazy loading options issue with Material UI
 * https://github.com/callemall/material-ui/issues/203
 */

export default class WrappedDropdown extends Component {
  render() {
    let baseSize = this.props.baseSize || 0;
    return this.props.options.length > baseSize ?
      <DropDownMenu className={this.props.className} menuItems={this.props.options} onChange={this.props.handleChange} selectedIndex={this.props.selectedIndex} /> :
      null;
  }
};

WrappedDropdown.propTypes = {
  className: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  selectedIndex: React.PropTypes.number.isRequired,
  baseSize: React.PropTypes.number
};
