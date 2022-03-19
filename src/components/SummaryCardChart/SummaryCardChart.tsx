import React, { PureComponent } from 'react';
import './SummaryCardChart.css';
import { render } from 'react-dom';
import { Legend, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface LineDataPoint {
  name: string;
  productCount: number;
}

interface LineChartState {
  data: LineDataPoint[];
}

export default class SummaryCardChart extends PureComponent<any, LineChartState> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      data: this.generateProductData()
    };
  }

  private generateProductData(): LineDataPoint[] {
    const categories: string[] = ['January', 'February', 'March', 'April'];

    return categories.map((category: string) => {
       return {
        name: category,
        productCount: +(Math.random() * (130 - 1) + 1).toFixed(0)
      };
    });
  }

  render() {
    const data = this.state.data;

    return (
        <LineChart
          width={650}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" height={36}/>
          <Tooltip contentStyle={{ backgroundColor: '#121212' }}/>
          <Line name="Number of Products Purchased per Month" type="monotone" dataKey="productCount" stroke="#8884d8" dot={false}/>
        </LineChart>
    )
  }
}