import React from 'react';
import Highcharts from 'highcharts';
import DarkUnica from 'highcharts/themes/dark-unica'
import HighchartsReact from 'highcharts-react-official';
import './TimeSeriesLineChart.css';
import { HighchartsChartState } from '../../models/CommonChartModels';
import { getTimeSeriesData } from '../../models/DataGenerator';

DarkUnica(Highcharts);

export default class TimeSeriesLineChart extends React.Component<HighchartsReact.Props, HighchartsChartState> {
  constructor(props: HighchartsReact.Props) {
    super(props);

    const seriesStartDate: Date = new Date(2021, 1, 1);
    const seriesEndDate: Date = new Date();

    this.state = {
      chartOptions: {
        chart: {
          zoomType: 'x',
        },
        title: {
          text: 'ACME @ NYSE',
          style: {fontSize: '1.5em', fontFamily: 'Open Sans'}
        },
        subtitle: {
          text: 'ACME Corporation',
          style: {fontSize: '1em', fontFamily: 'Roboto'}
        },
        legend: {
          enabled: false
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: '#32393c',
          shadow: !0,
          headerFormat: '<span style="font-size: 1.2em; font-family: Open Sans">{point.key}</span></br>',
          style: {fontSize: '1.25em', fontFamily: 'Open Sans'}
        },
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%e %b %Y}',
            style: {fontSize: '1em', fontFamily: 'Roboto'}
          }          
        },
        yAxis: {
          title: {
            text: 'Close ($)',
            style: {fontSize: '1em', fontFamily: 'Roboto'}
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
                      [0, '#F68FBE'],
                      [1, '#784BA0'],
                      [2, '#36A2EF']
                  ]
              },
              marker: {
                  radius: 3
              },
              lineWidth: 2,
              states: {
                  hover: {
                      lineWidth: 2
                  }
              },
              threshold: null
          }
      },
        series: [{
          type: 'area',
          color: '#3cfff1',
          lineWidth: 1,
          marker: {
            enabled: false
          },
          name: 'Daily Close ($)',
          data: getTimeSeriesData(seriesStartDate, seriesEndDate)
        }]
      }
    };
  }

  render() {
    const chartOptions: Highcharts.Options = this.state.chartOptions;

    return (
      <div data-testid="TimeSeriesLineChart">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )

  }
}