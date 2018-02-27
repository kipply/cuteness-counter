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
      db: firebase.database(),
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
        console.log(result);
        const usersRef = this.state.db.ref('users/');
        usersRef.child(result.user.uid).once('value', (snapshot) => {
          const exists = (snapshot.val() !== null);
          if (!exists) {
            const currTime = new Date().getTime();

            // Set cuteness points
            this.state.db.ref(`users/${result.user.uid}/point-history`).push({
              timestamp: currTime,
              val: 1500,
            });
            this.state.db.ref(`users/${result.user.uid}/points`).set(1500);

            // Set connoiseuring points
            this.state.db.ref(`users/${result.user.uid}/connoiseuring-history`).push({
              timestamp: currTime,
              val: 0,
            });
            this.state.db.ref(`users/${result.user.uid}/connoiseuring`).set(0);
          }
        });
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
};

export default withRouter(AuthButton);
