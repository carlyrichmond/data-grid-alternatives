import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCardChart from './SummaryCardChart';

describe('<SummaryCardChart />', () => {
  test('it should mount', () => {
    render(<SummaryCardChart />);
    
    const summaryCardChart = screen.getByTestId('SummaryCardChart');

    expect(summaryCardChart).toBeInTheDocument();
  });
});