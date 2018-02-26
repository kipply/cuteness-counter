import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Dashboard from './components/Dashboard';
import Home from './components/Home';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
