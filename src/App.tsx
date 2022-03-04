import React from 'react';
import './App.css';
import PivotTable from './components/PivotTable/PivotTable.lazy';
import TimeSeriesLineChart from './components/TimeSeriesLineChart/TimeSeriesLineChart';

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {
  return (
    <div className="App">
     <TimeSeriesLineChart/>
     { /* <PivotTable/> */}
    </div>
  );
}

export default App;
