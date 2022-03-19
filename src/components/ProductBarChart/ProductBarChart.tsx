import React, { PureComponent } from 'react';
import './ProductBarChart.css';
import { render } from 'react-dom';
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  anvilCount: number;
  giantRubberBandCount: number; 
  superGiantRubberBandCount: number;
}

interface BarChartState {
  data: DataPoint[];
}

export default class ProductBarChart extends PureComponent<any, BarChartState> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      data: this.generateProductData()
    };
  }

  private generateProductData(): DataPoint[] {
    const categories: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    return categories.map((category: string) => {
       return {
        name: category,
        anvilCount: +(Math.random() * (15 - 1) + 1).toFixed(1),
        giantRubberBandCount: +(Math.random() * (5 - 1) + 1).toFixed(1), 
        superGiantRubberBandCount: +(Math.random() * (8 - 1) + 1).toFixed(1)
      };
    });
  }

  render() {
    const data = this.state.data;

    return (
      <div className="product-chart-container">
        <h4>W.E. Coyote Product Purchase History</h4>
        <h5>Net Count, January-July 2021</h5>
          <BarChart
            width={1400}
            height={600}
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
            <Tooltip contentStyle={{ backgroundColor: '#8087E8' }}/>
            <Legend/>
            <Bar name="Super Giant Rubber Band" dataKey="superGiantRubberBandCount" stackId="a" fill="#cdc225" />
            <Bar name="Giant Rubber Band" dataKey="giantRubberBandCount" stackId="a" fill="#8087E8" />
            <Bar name="Anvil" dataKey="anvilCount" fill="#7798BF" />
        </BarChart>
      </div>
    )
  }
}

//render(<ProductBarChart/>, document.getElementById('root'));