'use strict'

import React from 'react';
import { TextField, RaisedButton, Checkbox, Snackbar } from 'material-ui';
import AdminStore from '../../stores/AdminStore';
import LemurTunesActions from '../../actions/LemurTunesActions';
import ResultsPane from '../../components/ResultsPane'
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
    this._handleImport = this._handleImport.bind(this);
  }

  getStateFromStore() {
    return {
      addCity: AdminStore.getAddCity(),
      snackbarMessage: AdminStore.getSnackbarMessage(),
      results: AdminStore.getResults() // make general data and let ResultsPane handle choice
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

  //verifysongkick

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6'>
            <h3>Controls</h3>
            <TextField
              id='addCity'
              ref='addCity'
              hintText='City, ST'
              errorText=''
              floatingLabelText='Add New City'
              onBlur={this._handleAddCityOnBlur} />
            <RaisedButton label='Submit' secondary={true} onClick={this._handleAddCitySubmit} />
            <TextField
              id='verifySongkick'
              disabled={true}
              defaultValue='Verify Songkick DB' />
            <RaisedButton label='Get Stats' secondary={true} onClick={this._handleVerifySongkick} />
            <Checkbox id='cities' ref='cities' value='cities' label='Cities' />
            <Checkbox id='shows' ref='shows' value='shows' label='Shows' />
            <Checkbox id='playlists' ref='playlists' value='playlists' label='Playlists' />
            <Checkbox id='songs' ref='songs' value='songs' label='Songs' />
            <Checkbox id='bands' ref='bands' value='bands' label='Bands' />
            <RaisedButton label='Import' secondary={true} onClick={this._handleImport} />
          </div>
          <div className='col-sm-6'>
            <ResultsPane results={this.state.results} />
          </div>
        </div>
        <Snackbar
          ref='snackbar'
          message={this.state.snackbarMessage}
          action='Dismiss'
          onActionTouchTap={this._handleActionTouchTap} />
      </div>
    );
  }

  _showSnackbar() {
    let that = this;
    this.refs.snackbar.show();
    setTimeout(function () {
      that.refs.snackbar.dismiss();
    }, 4000)
  }

  _handleVerifySongkick(e) {
    e.preventDefault();
    LemurTunesActions.verifySongkick();
  }

  _handleImport(e) {
    e.preventDefault();
    let cities = this.refs.cities.isChecked(),
      shows = this.refs.shows.isChecked(),
      playlists = this.refs.playlists.isChecked(),
      songs = this.refs.songs.isChecked(),
      bands = this.refs.bands.isChecked();

    LemurTunesActions.importAllData(cities, shows, playlists, songs, bands);
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