import { EuiProvider, EuiTabbedContent } from '@elastic/eui';
import { faArrowTrendUp, faBoxesStacked, faCashRegister, faChartArea, faCreditCard, faGifts, faMagnifyingGlassChart, faMapLocation, faPeopleArrowsLeftRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './App.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import BubbleMap from './components/BubbleMap/BubbleMap.lazy';
import ChartDrilldown from './components/ChartDrilldown/ChartDrilldown.lazy';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import GiftCardChordDiagram from './components/GiftCardChordDiagram/GiftCardChordDiagram.lazy';
import GroupingCustomerGrid from './components/GroupingCustomerGrid/GroupingCustomerGrid.lazy';
import PivotTable from './components/PivotTable/PivotTable.lazy';
import ProductColumnChart from './components/ProductColumnChart/ProductColumnChart.lazy';
import SameOldDataGridView from './components/SameOldDataGridView/SameOldDataGridView.lazy';
import SummaryCardList from './components/summary/SummaryCardList/SummaryCardList.lazy';
import TimeSeriesLineChart from './components/TimeSeriesLineChart/TimeSeriesLineChart';
import ElasticTimeSeriesLineChart from './components/ElasticTimeSeriesLineChart/ElasticTimeSeriesLineChart.lazy';

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {
  const currentHeader = 'Sales Portal';
  const bodyOverrides = {
    colors: {
      LIGHT: {
        primary: '#F8FAFD',
      },
      DARK: {
        primary: '#32393c',
      },
    },
  };
  
  return (
    <div className='app-container'>
      <EuiProvider colorMode='dark' modify={bodyOverrides}>
        <DashboardHeader viewTitle={currentHeader}/>
          <main>
            <EuiTabbedContent
              expand={true}
              tabs={[
                {
                  id: 'sales-inventory',
                  name: 'Sales Inventory',
                  prepend: (<FontAwesomeIcon icon={faBoxesStacked}/>),
                  content: (
                    <SameOldDataGridView/>
                  )
                },
                {
                  id: 'customer-statistics',
                  name: 'Customer Statistics',
                  prepend: (<FontAwesomeIcon icon={faUser}/>),
                  content: (
                    <SummaryCardList/>
                  )
                },
                {
                  id: 'purchase-history',
                  name: 'Purchase History',
                  prepend: (<FontAwesomeIcon icon={faCreditCard}/>),
                  content: (
                    <ProductColumnChart/>
                  )
                },
                {
                  id: 'stock-price',
                  name: 'Stock Price',
                  prepend: (<FontAwesomeIcon icon={faArrowTrendUp}/>),
                  content: (
                    <TimeSeriesLineChart/>
                  )
                },
                {
                  id: 'product-purchase-trend',
                  name: 'Product Trends',
                  prepend: (<FontAwesomeIcon icon={faChartArea}/>),
                  content: (
                    <ElasticTimeSeriesLineChart/>
                  )
                },
                {
                  id: 'gift-cards-master',
                  name: 'Gift Cards Master',
                  prepend: (<FontAwesomeIcon icon={faGifts}/>),
                  content: (
                    <GroupingCustomerGrid/>
                  )
                },
                {
                  id: 'gift-card-relationships',
                  name: 'Gift Card Relationships',
                  prepend: (<FontAwesomeIcon icon={faPeopleArrowsLeftRight}/>),
                  content: (
                    <GiftCardChordDiagram/>
                  )
                },
                {
                  id: 'analytics',
                  name: 'Analytics',
                  prepend: (<FontAwesomeIcon icon={faCashRegister}/>),
                  content: (
                    <PivotTable/>
                  )
                },
                {
                  id: 'distribution',
                  name: 'Distribution',
                  prepend: (<FontAwesomeIcon icon={faMapLocation}/>),
                  content: (
                    <BubbleMap/>
                  )
                },
                {
                  id: 'dashboard',
                  name: 'Dashboard',
                  prepend: (<FontAwesomeIcon icon={faMagnifyingGlassChart}/>),
                  content: (
                    <ChartDrilldown/>
                  )
                }
              ]}
            />
          </main>
      </EuiProvider>
  </div>
  );
}

export default App;
