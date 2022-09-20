import { AreaSeries, Axis, Chart, niceTimeFormatByDay, Settings, timeFormatter } from '@elastic/charts';
import { dateFormatAliases, formatDate } from '@elastic/eui';
import { EUI_CHARTS_THEME_DARK } from '@elastic/eui/dist/eui_charts_theme';
import '@elastic/charts/dist/theme_only_dark.css';
import React from 'react';
import './ElasticTimeSeriesLineChart.css';
import { getTimeSeriesData } from '../../models/DataGenerator';

export function ElasticTimeSeriesLineChart(){ 
  const euiTheme = EUI_CHARTS_THEME_DARK.theme;
  euiTheme.axes = {
    axisTitle: {
      fill: '#e5e5e5'
    },
    tickLabel: {
      fontSize: 14
    }
  };
  euiTheme.chartMargins = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 15
  };

  const seriesStartDate: Date = new Date('2022-09-22 00:00:00');
  const seriesEndDate: Date = new Date('2022-09-22 23:30:00');

  const data1 = getTimeSeriesData(seriesStartDate, seriesEndDate, 30);
  const data2 = getTimeSeriesData(seriesStartDate, seriesEndDate, 30);
  const data3 = getTimeSeriesData(seriesStartDate, seriesEndDate, 30);

  return (
    <div className='product-time-series' data-testid='ElasticTimeSeriesLineChart'>
      <h2 className='chart-header'>Order Delivery Volumes</h2>
      <h3 className='chart-header'>Number of Orders Shipped per Month</h3>
      <Chart className='product-time-series-chart' size={{height: '70vh', width: '90%'}}>
        <Settings
          theme={euiTheme}
          showLegend={true}
          legendPosition="top"
        />
        <AreaSeries
          id="anvils"
          name="Anvils"
          data={data1}
          xScaleType="time"
          xAccessor={0}
          yAccessors={[1]}
          stackAccessors={[0]}
        />
       <AreaSeries
            id="rubber-bands"
            name="Rubber Bands"
            data={data2}
            xScaleType="time"
            xAccessor={0}
            yAccessors={[1]}
            stackAccessors={[0]}
          />
        <AreaSeries
            id="gift-cards"
            name="Gift Cards"
            data={data3}
            xScaleType="time"
            xAccessor={0}
            yAccessors={[1]}
            stackAccessors={[0]}
          /> 
        <Axis
          title={formatDate(seriesStartDate, dateFormatAliases.date)}
          id="bottom-axis"
          position="bottom"
          tickFormat={timeFormatter(niceTimeFormatByDay(1))}
          showGridLines
        />
        <Axis
          id="left-axis"
          position="left"
          showGridLines
          tickFormat={(d) => Number(d).toFixed(0)}
        />
      </Chart>
    </div>
  );
}

export default ElasticTimeSeriesLineChart;