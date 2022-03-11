import React, { Component } from 'react';
import { render } from 'react-dom';
import { Bar } from 'react-chartjs-2';
import { BarElement, Chart, CategoryScale, ChartData, ChartOptions, Legend, LinearScale, Title, Tooltip } from 'chart.js';

interface ChartJSState {
  options: ChartOptions;
  data: ChartData<'bar'>;
}

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default class ProductBarChart extends Component<any, ChartJSState> {
  
  constructor(props: any) {
    super(props);

    const categories: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    this.state = {
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'W. E. Coyote Product Purchase History',
          },
          subtitle: {
            display: true,
            text: 'Jan-Jul 2021'
          }
        },
      },
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Dataset 1',
            data: categories.map(() => +(Math.random() * (15 - 1) + 1).toFixed(1)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: categories.map(() => +(Math.random() * (25 - 4) + 4).toFixed(1)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    };
  }

  render() {
    const chartOptions = this.state.options;
    const data = this.state.data;

    return (
      <div>
        <Bar options={chartOptions} data={data} />
      </div>
    )
  }
}

render(<ProductBarChart/>, document.getElementById('root'));