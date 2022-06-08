import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCardChart from './SummaryCardChart';

describe('<SummaryCardChart />', () => {
  test('it should render a card', () => {
    render(<SummaryCardChart />);
    
    const summaryCardLegendText = screen.getByText(/Number of Products/i);
    expect(summaryCardLegendText).toBeInTheDocument();
  });
});