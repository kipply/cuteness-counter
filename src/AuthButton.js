import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import SignIn from 'react-icons/lib/fa/sign-in';
import SignOut from 'react-icons/lib/fa/sign-out';

import * as firebase from 'firebase';

import logError from './utils/logging';

import './css/AuthButton.css';

export default class AuthButton extends Component {
  static login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then()
      .catch((error) => { logError(error); });
  }

  static logout() {
    firebase.auth().signOut();
  }

  constructor(props) {
    super(props);
    this.state = {
      signedIn: props.signedIn,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.signedIn !== nextProps.signedIn) { // Update state if necessary
      this.setState({ signedIn: nextProps.signedIn });
    }
  }

  render() {
    return (
      <div className="auth-button-container">
        <FlatButton
          className="auth-button"
          type="submit"
          icon={this.state.signedIn ? <SignOut /> : <SignIn />}
          onClick={() => this.state.signedIn ? AuthButton.logout() : AuthButton.login()}
          label={this.state.signedIn ? 'Logout' : 'Login'}
          hoverColor="transparent"
        />
      </div>
    );
  }
}

AuthButton.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};
