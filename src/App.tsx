import React from 'react';
import './App.css';
import PivotTable from './components/PivotTable/PivotTable.lazy';
import ProductBarChart from './components/ProductBarChart/ProductBarChart.lazy';
import SummaryCard from './components/SummaryCard/SummaryCard.lazy';
import SummaryCardList from './components/SummaryCardList/SummaryCardList.lazy';
import TimeSeriesLineChart from './components/TimeSeriesLineChart/TimeSeriesLineChart';

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {
  return (
    <div id="app" className="App">
      <SummaryCardList/>
     { /* <ProductBarChart/> */ }
     { /* <TimeSeriesLineChart/> */ }
     { /* <PivotTable/> */ }
    </div>
  );
}

export default App;
