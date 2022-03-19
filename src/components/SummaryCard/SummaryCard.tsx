import React, { Component } from 'react';
import './SummaryCard.css';
import { render } from 'react-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { CustomerSummary } from '../../models/CustomerModel';
import SummaryCardChart from '../SummaryCardChart/SummaryCardChart.lazy';

interface SummaryCardProps {
  customer: CustomerSummary;
}

export default class SummaryCard extends React.Component<SummaryCardProps, any> {
  
  constructor(props: SummaryCardProps) {
    super(props);
  }

  private initializeDarkTheme(): Theme {
    return createTheme({
      palette: {
        mode: 'dark',
        text: {
          primary: '#784BA0',
          secondary: '#2B86C5'
        }
      },
    });
  }

  private addCommas(num: number): string {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  private formatBalance(num: number): string {
    return '£' + this.addCommas(num);
  }

  private formatCounts(num: number): string {
    return this.addCommas(num);
  }

  render() 
  {
    const darkModeTheme: Theme = this.initializeDarkTheme();

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
            {this.formatBalance(this.props.customer.net_purchases_gbp)} <span className="descriptor">purchased</span>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div">
            {this.formatCounts(this.props.customer.item_purchase_count)} <span className="descriptor">items purchased to date</span>
          </Typography>
        </CardContent>
      </Box>
        </Card>
    </ThemeProvider>
    )
  }
}