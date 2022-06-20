import { EuiProvider, EuiTab, EuiTabs } from '@elastic/eui';
import { faArrowTrendUp, faBoxesStacked, faCashRegister, faCreditCard, faGifts, faMagnifyingGlassChart, faMapLocation, faPeopleArrowsLeftRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';
import '@elastic/eui/dist/eui_theme_dark.css';
import { init as initApm } from '@elastic/apm-rum';

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

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {

  const apm = initApm({
    serviceName: 'data-grid-alternatives-ui',
    serverUrl: 'http://localhost:3000/',
    serviceVersion: '1'
  });

  const selectedTab: string = useLocation().pathname.substring(1) || 'sales-inventory';
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
  
  const [selectedTabId, setSelectedTabId] = useState(selectedTab);

  const onSelectedTabChanged = (id: string) => {
    setSelectedTabId(id);
  };

  const tabs = [
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
      href: 'gift-cards',
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
  ];
  
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        key={index}
        href={tab.id}
        isSelected={tab.id === selectedTabId}
        prepend={tab.prepend}
        onClick={() => onSelectedTabChanged(tab.id)}>
        {tab.name}
      </EuiTab>
    ));
  };

  const renderRoutes = () => {
    return (
      <Routes>
          { tabs.map((tab, index) => (
            <Route
              key={index}
              path={tab.id}
              element={tab.content}/>
          ))}
      </Routes>
    );
  };

  return (
      <div className='app-container'>
        <EuiProvider colorMode='dark' modify={bodyOverrides}>
          <div className='main-app-header'>
          <DashboardHeader viewTitle={currentHeader}/>
            <nav>
              <EuiTabs>{renderTabs()}</EuiTabs>
            </nav>
          </div>
            <main>
              {renderRoutes()}
          </main>
      </EuiProvider>
    </div>
  );
}

export default App;
