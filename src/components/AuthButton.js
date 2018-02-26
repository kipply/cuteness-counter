import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import SignIn from 'react-icons/lib/fa/sign-in';
import SignOut from 'react-icons/lib/fa/sign-out';

import * as firebase from 'firebase';

import logError from '../utils/logging';

import '../css/AuthButton.css';

class AuthButton extends Component {
  static login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .catch((error) => { logError(error); });
  }

  static logout() {
    firebase.auth().signOut()
      .catch((error) => { logError(error); });
  }

  constructor(props) {
    super(props);
    this.state = {
      signedIn: props.signedIn,
    };
  }

  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.signedIn !== nextProps.signedIn) { // Update state if necessary
      this.setState({ signedIn: nextProps.signedIn });
    }
  }

  componentWillUnmount() {
    this.authListener = undefined;
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/');
      }
    });

    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        this.props.history.push('/dashboard');
      }
    }).catch((error) => { logError(error); });
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
  history: PropTypes.objectOf(String),
};

AuthButton.defaultProps = {
  history: [],
};
export default withRouter(AuthButton);
