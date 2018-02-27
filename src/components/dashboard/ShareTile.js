import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CopyToClipboard from 'react-copy-to-clipboard';

import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import Copy from 'react-icons/lib/fa/copy';

export default class ShareTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastOpen: false,
      thingId: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.thingId !== nextProps.thingId) { // Update state if necessary
      this.setState({ thingId: nextProps.thingId });
    }
  }

  render() {
    return (
      <Paper className="dashboard-tile" zDepth={1}>
        <h1>Share</h1>
        <p className="text-grey">Share your thing with to gain cuteness points!</p>
        <CopyToClipboard
          text={`localhost:3000/#/visit?${this.state.thingId}`}
          onCopy={() => this.setState({ toastOpen: true })}
        >
          <p className="share-tile-copy">
            <Copy /> {`localhost:3000/#/visit?${this.state.thingId}`}
          </p>
        </CopyToClipboard>
        <Snackbar
          open={this.state.toastOpen}
          message="Link copied to clipboard!"
          autoHideDuration={1000}
          onRequestClose={() => this.setState({ toastOpen: false })}
        />
      </Paper>
    );
  }
}

ShareTile.propTypes = {
  thingId: PropTypes.string.isRequired,
};

