import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as firebase from 'firebase';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import Upload from 'react-icons/lib/fa/upload';
import Floppy from 'react-icons/lib/fa/floppy-o';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import '../css/CutenessRater.css';

class CutenessRater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: firebase.auth().currentUser,
      profile: { name: 'bananan', description: 'ddeseutosneuhoenuhdoenhuoe' },
    };
  }

  componentWillMount() {
    this.authLristener = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/');
      } else {
        this.setState({ user });
      }
    });
  }

  componentWillUnmount() {
    this.authListener = undefined;
  }

  render() {
    return (
      <div className="cuteness-rater">
        <h1>Cuteness Rater</h1>
        <Paper zDepth={1} className="cuteness-rater-container">
          <h3 className="cuteness-rater-name">{this.state.profile.name}'s Profile</h3>
          <h3 className="cuteness-rater-name">{this.state.profile.name}'s Profile</h3>
        </Paper>
      </div>
    );
  }
}

export default withRouter(CutenessRater);
