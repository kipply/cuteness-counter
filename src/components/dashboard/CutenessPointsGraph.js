import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import { Line } from 'react-chartjs-2';

export default class CutenessPointsGraph extends Component {
  constructor(props) {
    super(props);
    this.cutenessPointsData = {
      // labels should adapt accordingly
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Cuteness Points',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40], // this should change
        },
      ],
    };
  }
  render() {
    return (
      <Paper zDepth={1}>
        <Line
          data={this.cutenessPointsData}
          width={100}
          height={500}
          options={{
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: 'Cuteness Points',
                fontSize: 24,
              },
            }}
        />
      </Paper>
    );
  }
}
