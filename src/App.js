import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as firebase from 'firebase';

import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp({
      apiKey: 'AIzaSyDM3HMF0lwEFSxLPJva0dCajoEVBm7IRuY',
      authDomain: 'caroly-counter.firebaseapp.com',
      databaseURL: 'https://caroly-counter.firebaseio.com',
      projectId: 'caroly-counter',
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
