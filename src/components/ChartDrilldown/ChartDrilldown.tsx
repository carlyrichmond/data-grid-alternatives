import React from 'react';
import { BaseChartProps } from '../../models/CommonChartModels';
import { FilterSelection } from '../DataGrid/DataGrid';
import DataGrid from '../DataGrid/DataGrid.lazy';
import GiftCardChordDiagram from '../GiftCardChordDiagram/GiftCardChordDiagram.lazy';
import StackedProductBarChart from '../StackedProductBarChart/StackedProductBarChart.lazy';
import './ChartDrilldown.css';

interface ChartDrilldownState {
  chartSettings: BaseChartProps;
  dataGridSettings: FilterSelection;
}

export default class ChartDrilldown extends React.Component<any, ChartDrilldownState> {

  constructor(props: ChartDrilldownState | Readonly<ChartDrilldownState>) {
    super(props);

    this.state = {
      chartSettings: { isDashboardChild: true, handleDataPointClick: this.updateFilterSelection.bind(this) },
      dataGridSettings: { customerName: 'W. E. Coyote', productCategory: null }
    }
  }

  private updateFilterSelection(event: any) {
    const filterSelection: FilterSelection = { customerName: undefined, productCategory: 'Gift Card' }
    // Highcharts
    if (event.point) {
     filterSelection.productCategory = event.point.series.name
    } 
    // Nivo Chord Ribbon
    else if (event.source) {
      filterSelection.customerName = event.source.id;
    }
    // Nivo Chord Arc (must come after Ribbon as id used as combined key)
    else if (event.id) {
      filterSelection.customerName = event.id;
    } 

    const newState: ChartDrilldownState = { chartSettings: this.state.chartSettings, dataGridSettings: filterSelection };
    this.setState(newState);
  }

  render() {
    return (
      <div className="main-dashboard-panel">
        <div data-testid="DashboardBarChart" className="bar-chart-panel">
          <StackedProductBarChart {...this.state.chartSettings}/>
        </div>

        <div data-testid="DashboardChordDiagram"  className="chord-diagram-container">
            <h3 className="dashboard-component-heading">Gift Card Relationships</h3>
            <GiftCardChordDiagram {...this.state.chartSettings}/>
          </div>
        
        <div data-testid="DashboardGrid" className="grid-panel" style={{width: '100%', height: '33vh'}}>
          <h3 className="dashboard-component-heading">Details</h3>
          <DataGrid {...this.state.dataGridSettings}/>
        </div>
      </div>
    );
  }
}
