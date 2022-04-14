import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DarkUnica from 'highcharts/themes/dark-unica'
import { HighchartsChartState } from '../../models/CommonChartModels';
import { generateProductData } from '../../models/CustomerDataGenerator';
import { ProductCounts } from '../../models/CustomerModel';
import './StackedProductBarChart.css';

DarkUnica(Highcharts);

export default class StackedProductBarChart extends Component<HighchartsReact.Props, HighchartsChartState> {
  constructor(props: HighchartsReact.Props) {
    super(props);

    const {categories, series} = this.getStackedProductData();

    this.state = {
      chartOptions: {
        chart: {
          zoomType: 'x',
          backgroundColor: ''
        },
        title: {
          text: 'Top Customer Product Purchases',
          style: {fontSize: '1.5em', fontFamily: 'Open Sans'}
        },
        subtitle: {
          text: 'W. E. Coyote',
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
          categories: categories,
          labels: {
            style: {fontSize: '1em', fontFamily: 'Roboto'}
          }     
        },
        yAxis: {
          title: {
            text: 'Number of Items Purchases',
            style: {fontSize: '1em', fontFamily: 'Roboto'}
          }
        },
        plotOptions: {
          bar: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
        series: series
      }
    };
  }

  private getStackedProductData(): { categories: string[], series: Highcharts.SeriesBarOptions[] } {
    const baseProductData: ProductCounts[] = generateProductData();
    const categories: Set<string> = new Set<string>();
    const series: Highcharts.SeriesBarOptions[] = [
      { name: 'Anvil', type: 'bar', color:'#66c2a5', data: [] },
      { name: 'Giant Rubber Band', type: 'bar', color: '#8da0cb', data: [] },
      { name: 'Super Giant Rubber Band', type: 'bar', color: '#e78ac3', data: [] },];
    
    for (const productDetail of baseProductData) {
      categories.add(productDetail.name);
      series[0].data!.push(productDetail.anvilCount);
      series[1].data!.push(productDetail.giantRubberBandCount);
      series[2].data!.push(productDetail.superGiantRubberBandCount);
    }

    return { categories: Array.from(categories), series: series };
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