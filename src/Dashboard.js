import React, { Component } from 'react';

import * as firebase from 'firebase';

import logError from './utils/logging';

export default class Dashboard extends Component {

  static handleClick() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then()
      .catch((error) => { logError(error); });
  }

  render() {
    return (
      <div className="dashboard">
      reeee
      </div>
    );
  }
}
