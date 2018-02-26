import React, { Component } from 'react';

import CutenessPointsGraph from './dashboard/CutenessPointsGraph';


export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <CutenessPointsGraph />
        <div />
      </div>
    );
  }
}
