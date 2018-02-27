import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import * as firebase from 'firebase';

export default class GotoProfileTile extends Component {
  render() {
    return (
      <Paper className="dashboard-tile dashboard-goto-profile" zDepth={1}>
        <Link to="/profile">
          <RaisedButton
            label="GO TO MY PROFILE"
            backgroundColor="#4DD0EA"
          />
        </Link>
      </Paper>
    );
  }
}
