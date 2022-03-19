import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCard from './SummaryCard';
import { CustomerSummary } from '../../models/CustomerModel';

describe('<SummaryCard />', () => {
  test('it should mount', () => {

    const customer: CustomerSummary = {
      name: 'W. E. Coyote',
      item_purchase_count: 2,
      net_purchases_gbp: 100.45
    }

    render(<SummaryCard customer={customer}/>);
    
    const summaryCard = screen.getByTestId('SummaryCard');

    expect(summaryCard).toBeInTheDocument();
    expect(customer.name).toBeInTheDocument();
  });
});