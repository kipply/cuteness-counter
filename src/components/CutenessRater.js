import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as firebase from 'firebase';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Heart from 'react-icons/lib/fa/heart';

import '../css/CutenessRater.css';

class CutenessRater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rater: firebase.auth().currentUser,
      user: props.match.params.uid,
      profile: {
        name: '',
        description: '',
        image: '',
      },
      cutenessPoints: 1500,
    };
  }

  componentWillMount() {
    this.authListener = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ rater: user });

      const profileRef = firebase.database().ref(`users/${this.state.user}/profile`);

      profileRef.once('value', (snapshot) => {
        const profile = snapshot.val();
        firebase.storage().ref('user-dps').child(`${this.state.user}.jpg`).getDownloadURL()
          .then((url) => {
            const newProfile = {
              name: profile.name,
              description: profile.description,
              image: url,
            };
            this.setState({ profile: newProfile });
          });
      });
    });
  }

  componentWillUnmount() {
    this.authListener = undefined;
  }

  submitRating() {
    let ok = true;
    // Check values
    if (this.state.cutenes.length > 100) {
      ok = false;
      this.setState({ toastMessage: 'Dude why is your name so long? Save not successful.' });
      this.setState({ toastOpen: true });
    }
  }

  render() {
    return (
      <div className="cuteness-rater">
        <h1>Cuteness Rater</h1>
        <Grid>
          <Paper zDepth={1} className="cuteness-rater-container">
            <Row className="cuteness-rater-dp-container-container">
              <div className="cuteness-rater-dp-container">
                <img className="cuteness-rater-dp" src={this.state.profile.image} alt="profile" />
              </div>
              <h3 className="cuteness-rater-name">{this.state.profile.name}&apos;s Profile</h3>
            </Row>
            <Row className="cuteness-rater-description text-center">
              <Col xs={12}>
                {this.state.profile.description}
              </Col>
            </Row>
            <Divider />
            <Row className="cuteness-rater-form">
              <Col xs={12}>
                <TextField
                  floatingLabelText="Cuteness Points"
                  value={this.state.cutenessPoints}
                  errorText={this.state.cutenessPoints ? '' : 'This field is required.'}
                  onChange={(e, val) => { this.setState({ cutenessPoints: val }); }}
                />
              </Col>
              <Col xs={12}>
                <RaisedButton
                  type="file"
                  icon={<Heart />}
                  label="Rate!"
                  disabled={this.state.cuteness === '' || !this.state.rater}
                  onClick={() => this.submitRating()}
                />
              </Col>
            </Row>
          </Paper>
        </Grid>

      </div>
    );
  }
}

export default withRouter(CutenessRater);
