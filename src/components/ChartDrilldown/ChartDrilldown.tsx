import React, { Component } from 'react';
import { BaseChartProps } from '../../models/BaseProps';
import GiftCardChordDiagram from '../GiftCardChordDiagram/GiftCardChordDiagram.lazy';
import ProductBarChart from '../ProductBarChart/ProductBarChart.lazy';
import './ChartDrilldown.css';

interface ChartDrilldownState {
  currentSelectionEvent: any
}

export default class ChartDrilldown extends Component<any, ChartDrilldownState> {

  private readonly baseChartProps: BaseChartProps = { isDashboardChild: true };

  constructor(props: any | Readonly<any>) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <div className="chart-row">
          <ProductBarChart {...this.baseChartProps}/>
          <GiftCardChordDiagram {...this.baseChartProps}/>
        </div>
        <div className="grid-container">
          GRID GOES HERE!
        </div>
      </div>
    );
  }
}
