import React, { PureComponent } from 'react';
import './ProductColumnChart.css';
import { render } from 'react-dom';
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';
import { BaseChartProps } from '../../models/CommonChartModels';
import { ProductCounts } from '../../models/CustomerModel';
import { generateProductData } from '../../models/DataGenerator';

interface BarChartState {
  data: ProductCounts[];
}

export default class ProductColumnChart extends PureComponent<BaseChartProps, BarChartState> {
  
  constructor(props: BaseChartProps) {
    super(props);

    this.state = {
      data: generateProductData()
    };
  }

  render() {
    const data = this.state.data;
    const height = this.props.isDashboardChild ? 200 : 785;

    return (
      <div className="product-chart-container">
        <h2 className="product-chart-heading">W.E. Coyote</h2>
        <h3 className="product-chart-subheading">Net Count, January-July 2021</h3>
        <ResponsiveContainer minWidth={700} height={height}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: '#e5e5e5' }}/>
            <YAxis tick={{ fill: '#e5e5e5' }}/>
            <Tooltip cursor={{fill: '#3d3d3d'}} contentStyle={{ backgroundColor: '#121212', color: '#e5e5e5' }}/>
            <Legend verticalAlign='top'/>
            <Bar name="Super Giant Rubber Band" dataKey="superGiantRubberBandCount" stackId="a" fill="#e78ac3"/>
            <Bar name="Giant Rubber Band" dataKey="giantRubberBandCount" stackId="a" fill="#8da0cb" />
            <Bar name="Anvil" dataKey="anvilCount" fill="#66c2a5"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
  }
}