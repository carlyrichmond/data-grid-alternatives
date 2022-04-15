import React, { Component } from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';
import DataGrid from '../DataGrid/DataGrid.lazy';
import GiftCardChordDiagram from '../GiftCardChordDiagram/GiftCardChordDiagram.lazy';
import ProductColumnChart from '../ProductColumnChart/ProductColumnChart.lazy';
import StackedProductBarChart from '../StackedProductBarChart/StackedProductBarChart.lazy';
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
      <div className="main-dashboard-panel">
        <div className="bar-chart-panel">
          <StackedProductBarChart/>
        </div>

        <div className="chord-diagram-container">
            <h3 className="component-heading">Gift Card Relationships</h3>
            <GiftCardChordDiagram {...this.baseChartProps}/>
          </div>
        
        <div className="grid-panel" style={{width: '100%', height: '33vh'}}>
          <h3 className="component-heading">Details</h3>
          <DataGrid/>
        </div>
      </div>
    );
  }
}
