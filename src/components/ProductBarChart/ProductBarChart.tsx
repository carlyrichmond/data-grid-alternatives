import React, { PureComponent } from 'react';
import './ProductBarChart.css';
import { render } from 'react-dom';
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar } from 'recharts';

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
        <h2>W.E. Coyote</h2>
        <h3>Net Count, January-July 2021</h3>
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
            <Tooltip cursor={{fill: '#3d3d3d'}} contentStyle={{ backgroundColor: '#121212', color: '#e5e5e5' }}/>
            <Legend verticalAlign='top'/>
            <Bar name="Super Giant Rubber Band" dataKey="superGiantRubberBandCount" stackId="a" fill="#FF3CAC"/>
            <Bar name="Giant Rubber Band" dataKey="giantRubberBandCount" stackId="a" fill="#3cacff" />
            <Bar name="Anvil" dataKey="anvilCount" fill="#e5e5e5"/>
        </BarChart>
      </div>
    )
  }
}