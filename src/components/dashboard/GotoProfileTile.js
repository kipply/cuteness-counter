import React from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

function GotoProfileTile() {
  return (
    <Paper className="dashboard-tile text-center" zDepth={1}>
      <Link to="/profile">
        <RaisedButton
          label="GO TO MY PROFILE"
          backgroundColor="#4DD0EA"
        />
      </Link>
    </Paper>
  );
}

export default GotoProfileTile;
