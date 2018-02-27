import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as firebase from 'firebase';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Upload from 'react-icons/lib/fa/upload';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import '../css/Profile.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="profile">
        <h1>My Profile</h1>
        <Paper className="profile-form-container" zDepth={1}>
          <Grid>
            <Row className="profile-row">
              <Col lg={4}>
                <TextField
                  floatingLabelText="Name or Title"
                />
              </Col>
              <Col lg={8}>
                <TextField
                  floatingLabelText="Description"
                  multiLine
                  style={{ width: 400 }}
                />
              </Col>
            </Row>
            <Row className="profile-row">
              <Col lg={12}>
                <RaisedButton
                  type="file"
                  icon={<Upload />}
                  label="UPLOAD IMAGE"
                  backgroundColor="#4DD0EA"
                  onClick={() => this.upload.click()}
                />
              </Col>
              <input id="myInput" type="file" ref={(ref) => { this.upload = ref; }} style={{ display: 'none' }} />
            </Row>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Dashboard);
