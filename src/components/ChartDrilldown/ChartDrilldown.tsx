import React from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';
import { FilterSelection } from '../DataGrid/DataGrid';
import DataGrid from '../DataGrid/DataGrid.lazy';
import GiftCardChordDiagram from '../GiftCardChordDiagram/GiftCardChordDiagram.lazy';
import StackedProductBarChart from '../StackedProductBarChart/StackedProductBarChart.lazy';
import './ChartDrilldown.css';

export default class ChartDrilldown extends React.Component {

  private readonly baseChartProps: BaseChartProps = { isDashboardChild: true, handleDataPointClick: this.updateFilterSelection.bind(this) };
  private dataGridProps: FilterSelection;

  constructor(props: any | Readonly<any>) {
    super(props);
    this.dataGridProps = { customerName: 'W. E. Coyote', productCategory: null };
  }

  private updateFilterSelection(event: any) {
    this.dataGridProps = {
      customerName: null, productCategory: event.point.series.name
    };
  }

  render() {
    return (
      <div className="main-dashboard-panel">
        <div className="bar-chart-panel">
          <StackedProductBarChart {...this.baseChartProps}/>
        </div>

        <div className="chord-diagram-container">
            <h3 className="component-heading">Gift Card Relationships</h3>
            <GiftCardChordDiagram {...this.baseChartProps}/>
          </div>
        
        <div className="grid-panel" style={{width: '100%', height: '33vh'}}>
          <h3 className="component-heading">Details</h3>
          <DataGrid {...this.dataGridProps}/>
        </div>
      </div>
    );
  }
}