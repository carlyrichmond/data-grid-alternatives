import { faArrowTrendUp, faBoxesStacked, faCashRegister, faCreditCard, faGifts, faMagnifyingGlassChart, faMapLocation, faPeopleArrowsLeftRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Theme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
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
import { initializeDarkTheme } from './theme/MUIThemeInitialisation';

/**
 * App showcases a series of data visualisations
 * that can be used as alternatives to data grids
 * @return {JSX.Element} initial application view
 */
function App() {
  const [value, setValue] = React.useState('9');
  const currentHeader = 'Sales Portal';
  const tabDarkModeTheme: Theme = initializeDarkTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div className='app-container'>
      <header>
        <DashboardHeader viewTitle={currentHeader}/>
      </header>
      <ThemeProvider theme={tabDarkModeTheme}>
        <TabContext value={value}>

          <nav>
            {// TODO Add scroll support on tab navigation
            }
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
             <TabList onChange={handleChange} aria-label="Visualisation Samples" centered>
               <Tab icon={<FontAwesomeIcon icon={faBoxesStacked}/>} label="Sales Inventory" value="1"/>
               <Tab icon={<FontAwesomeIcon icon={faUser}/>} label="Customer Statistics" value="2"/>
               <Tab icon={<FontAwesomeIcon icon={faCreditCard}/>} label="Purchase History" value="3"/>
               <Tab icon={<FontAwesomeIcon icon={faArrowTrendUp}/>}  label="Stock Price" value="4"/>
               <Tab icon={<FontAwesomeIcon icon={faGifts}/>} label="Gift Cards Master" value="5"/>
               <Tab icon={<FontAwesomeIcon icon={faPeopleArrowsLeftRight}/>} label="Gift Card Relationships" value="6"/>
               <Tab icon={<FontAwesomeIcon icon={faCashRegister}/>} label="Analytics" value="7"/>
               <Tab icon={<FontAwesomeIcon icon={faMapLocation}/>} label="Distribution" value="8"/>
               <Tab icon={<FontAwesomeIcon icon={faMagnifyingGlassChart}/>} label="Dashboard" value="9"/>
             </TabList>
            </Box>
          </nav>

          <main>
            <TabPanel value="1">
              <SameOldDataGridView/>
            </TabPanel>
            <TabPanel value="2">
              <SummaryCardList/>
            </TabPanel>
            <TabPanel value="3">
              <ProductColumnChart/>
            </TabPanel>
            <TabPanel value="4">
              <TimeSeriesLineChart/>
            </TabPanel>
            <TabPanel value="5">
              <GroupingCustomerGrid/>
            </TabPanel>
            <TabPanel value="6">
              <GiftCardChordDiagram/>
            </TabPanel>
            <TabPanel value="7">
              <PivotTable/>
            </TabPanel>
            <TabPanel value="8">
              <BubbleMap/>
            </TabPanel>
            <TabPanel value="9">
              <ChartDrilldown/>
            </TabPanel>
          </main>
        </TabContext>
      </ThemeProvider>
  </div>
  );
}

export default App;
