import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import * as firebase from 'firebase';

import CutenessPointsGraph from './dashboard/CutenessPointsGraph';
import ConnoisseuringPointsGraph from './dashboard/ConnoisseuringPointsGraph';
import GotoProfileTile from './dashboard/GotoProfileTile';
import RankTile from './dashboard/RankTile';
import ShareTile from './dashboard/ShareTile';

import '../css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: firebase.auth().currentUser,
    };
  }

  componentWillMount() {
    this.authListener = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/');
        this.setState({ user });
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
                <Col xs={4} sm={12}>
                  <GotoProfileTile user={this.state.user} />
                </Col>
                <Col xs={4} sm={12}>
                  <RankTile />
                </Col>
                <Col xs={4} sm={12}>
                  <ShareTile />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <ConnoisseuringPointsGraph />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Dashboard);
