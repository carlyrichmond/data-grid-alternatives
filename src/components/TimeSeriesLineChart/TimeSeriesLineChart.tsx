import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import Sunset from 'highcharts/themes/sunset'
import HighchartsReact from 'highcharts-react-official';
import './TimeSeriesLineChart.css';

Sunset(Highcharts);

interface ChartState {
  chartOptions: Highcharts.Options
}

export default class TimeSeriesLineChart extends Component<HighchartsReact.Props, ChartState> {
  constructor(props: HighchartsReact.Props) {
    super(props);
    this.state = {
      chartOptions: {
        title: {
          text: 'My React Line Chart'
        },
        series: [{
          type: 'line',
          data: [1, 2, 3]
        }]
      }
    };
  }

  render() {
    const chartOptions: Highcharts.Options = this.state.chartOptions;

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )

  }
}

render(<TimeSeriesLineChart />, document.getElementById('root'));