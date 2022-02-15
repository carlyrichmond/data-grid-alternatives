import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './TimeSeriesLineChart.css';

//interface TimeSeriesLineChartProps extends HighchartsReact.Props {}

const options: Highcharts.Options = {
  title: {
      text: 'My React Line Chart'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }]
};

const TimeSeriesLineChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact 
    className="TimeSeriesLineChart" data-testid="TimeSeriesLineChart"
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default TimeSeriesLineChart;
