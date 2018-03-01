import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class RankTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      rank: '-',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.user !== nextProps.user) { // Update state if necessary
      this.setState({ user: nextProps.user });

      // should get rank after a function is built to keep ranks updated
    }
  }

  render() {
    return (
      <Paper className="dashboard-tile" zDepth={1}>
        <h1>Rank</h1>
      </Paper>
    );
  }
}
