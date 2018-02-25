import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import * as firebase from 'firebase';

import AuthButton from './AuthButton';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp({
      apiKey: 'AIzaSyDM3HMF0lwEFSxLPJva0dCajoEVBm7IRuY',
      authDomain: 'caroly-counter.firebaseapp.com',
      databaseURL: 'https://caroly-counter.firebaseio.com',
      projectId: 'caroly-counter',
    });

    this.state = {
      signedIn: false,
      drawerOpen: false,
    };
  }
  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  componentWillUnmount() {
    this.authListener = undefined;
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ signedIn: true });
      } else {
        this.setState({ signedIn: false });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Cuteness Counter"
            iconElementLeft={
              <IconButton onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
                <MenuIcon />
              </IconButton>
            }
          >
            <AuthButton signedIn={this.state.signedIn} />
          </AppBar>
          <Drawer open={this.state.drawerOpen} docked={false}>
            <IconButton onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
              <CloseIcon />
            </IconButton>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Cuteness Evaluator</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
