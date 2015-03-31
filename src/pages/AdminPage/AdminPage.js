'use strict'

import React from 'react';
import { TextField, RaisedButton, Snackbar } from 'material-ui';
import AdminStore from '../../stores/AdminStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
// import { PureRenderMixin } from 'react/addons';

export default class AdminPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  constructor(props) {
    super(props);
    this.state = this.getStateFromStore();
    this._onChange = this._onChange.bind(this);
    this._handleAddCityOnBlur = this._handleAddCityOnBlur.bind(this);
    this._handleAddCitySubmit = this._handleAddCitySubmit.bind(this);
    this._handleActionTouchTap = this._handleActionTouchTap.bind(this);
  }

  getStateFromStore() {
    return {
      addCity: AdminStore.getAddCity(),
      snackbarMessage: AdminStore.getSnackbarMessage()
    };
  }

  componentDidMount() {
    AdminStore.addChangeListener(this._onChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.snackbarMessage !== this.state.snackbarMessage) {
      this._showSnackbar();
    }
  }

  componentWillUnmount() {
    AdminStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        <TextField
          id='addCity'
          ref='addCity'
          hintText='City, ST'
          errorText=''
          floatingLabelText='Add New City'
          onBlur={this._handleAddCityOnBlur} />
        <RaisedButton label='Submit' secondary={true} onClick={this._handleAddCitySubmit} />
        <Snackbar
          ref='snackbar'
          message={this.state.snackbarMessage}
          action='Dismiss'
          onActionTouchTap={this._handleActionTouchTap} />
      </div>
    );
  }

  _showSnackbar() {
    var that = this;
    this.refs.snackbar.show();
    setTimeout(function () {
      that.refs.snackbar.dismiss();
    }, 4000)
  }

  _handleAddCitySubmit(e) {
    e.preventDefault();
    let array = this.state.addCity.split(',');
    LemurTunesActions.addCity(array[0].trim(), array[1].trim());
  }

  _handleAddCityOnBlur(e) {
    e.preventDefault();
    LemurTunesActions.setNewCity(this.refs.addCity.getValue());
  }

  _handleActionTouchTap(e) {
    this.refs.snackbar.dismiss();
  }

  _onChange() {
    this.setState(this.getStateFromStore())
  }

};