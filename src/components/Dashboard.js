import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import * as firebase from 'firebase';

import CutenessPointsGraph from './dashboard/CutenessPointsGraph';
import RankTile from './dashboard/RankTile';
import ShareTile from './dashboard/ShareTile';

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
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <CutenessPointsGraph />
            </Col>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={6} sm={12}>
                  <RankTile />
                </Col>
                <Col xs={6} sm={12}>
                  <ShareTile />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Dashboard);
