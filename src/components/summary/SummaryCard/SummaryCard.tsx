import React, { Component } from 'react';
import './SummaryCard.css';
import { render } from 'react-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { CustomerSummary } from '../../../models/CustomerModel';
import { initializeDarkTheme } from '../../../theme/MUIThemeInitialisation';
import SummaryCardChart from '../SummaryCardChart/SummaryCardChart.lazy';
import { formatBalance, formatCounts } from '../../../utils/Formatters';

interface SummaryCardProps {
  customer: CustomerSummary;
}

export default class SummaryCard extends React.Component<SummaryCardProps, any> {
  
  constructor(props: SummaryCardProps) {
    super(props);
  }

  render() 
  {
    const darkModeTheme: Theme = initializeDarkTheme();
    darkModeTheme.palette.text = {
      primary: '#cecece',
      secondary: '#2B86C5',
      disabled: '#e5e5e5'
    };

    return (
      <ThemeProvider theme={darkModeTheme}>
        <Card className="card" sx={{ width: 895, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <SummaryCardChart/>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" color="text.primary">
            {this.props.customer.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div">
            {formatBalance(this.props.customer.net_purchases_gbp)} <span className="descriptor">purchased</span>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div">
            {formatCounts(this.props.customer.item_purchase_count)} <span className="descriptor">items purchased to date</span>
          </Typography>
        </CardContent>
      </Box>
        </Card>
    </ThemeProvider>
    )
  }
}