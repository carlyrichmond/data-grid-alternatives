import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import DarkUnica from 'highcharts/themes/dark-unica'
import HighchartsReact from 'highcharts-react-official';
import './TimeSeriesLineChart.css';

DarkUnica(Highcharts);

interface ChartState {
  chartOptions: Highcharts.Options
}

export default class TimeSeriesLineChart extends Component<HighchartsReact.Props, ChartState> {
  constructor(props: HighchartsReact.Props) {
    super(props);

    const seriesStartDate: Date = new Date(2021, 1, 1);
    const seriesEndDate: Date = new Date();

    this.state = {
      chartOptions: {
        chart: {
          zoomType: 'x',
          backgroundColor:{
            linearGradient:{
              x1:0,
              y1:0,
              x2:0,
              y2:1
            },
            stops:[[0,"#1f1836"],[1,"#45445d"]]}
        },
        title: {
          text: 'ACME @ NYSE'
        },
        subtitle: {
          text: 'ACME Corporation'
        },
        legend: {
          enabled: false
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Close ($)'
          }
        },
        plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                      [0, '#8087E8'],
                      [1, '(128,135,232,0)']
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },
        series: [{
          type: 'area',
          marker: {
            enabled: false
          },
          name: 'Daily Close ($)',
          data: this.getTimeSeriesData(seriesStartDate, seriesEndDate)
        }]
      }
    };
  }

  getTimeSeriesData(startDate: Date, endDate: Date): number[][] {
    const MILLISECONDS_IN_DAY = 86400000;

    const data: number[][] = [];
    let currentDateInMilliseconds: number = startDate.getTime();
    const endDateInMilliseconds: number = endDate.getTime();

    while (currentDateInMilliseconds <= endDateInMilliseconds) {
      const currentPosition: number = Math.random() * (180 - 165) + 165;
      data.push([currentDateInMilliseconds, currentPosition]);
      currentDateInMilliseconds += MILLISECONDS_IN_DAY;
    }

    return data;
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