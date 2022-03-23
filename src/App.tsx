import React from 'react';
import './App.css';
import PivotTable from './components/PivotTable/PivotTable.lazy';
import ProductBarChart from './components/ProductBarChart/ProductBarChart.lazy';
import SameOldDataGrid from './components/SameOldDataGrid/SameOldDataGrid.lazy';
import SummaryCardList from './components/summary/SummaryCardList/SummaryCardList.lazy';
import TimeSeriesLineChart from './components/TimeSeriesLineChart/TimeSeriesLineChart';

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {
  return (
    <div id="app" className="App">
      {/* <SameOldDataGrid/> */}
     {/* <SummaryCardList/> */}
     { /* <ProductBarChart/> */} 
      {/* <TimeSeriesLineChart/> */}
      <PivotTable/> 
    </div>
  );
}

export default App;
