import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as firebase from 'firebase';

import CutenessPointsGraph from './dashboard/CutenessPointsGraph';

import '../css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.authListener = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/');
      }
    });
  }

  componentWillUnmount() {
    this.authListener = undefined;
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <CutenessPointsGraph />
      </div>
    );
  }
}

export default withRouter(Dashboard);
