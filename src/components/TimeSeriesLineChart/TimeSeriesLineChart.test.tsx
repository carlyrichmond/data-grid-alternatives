import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeSeriesLineChart from './TimeSeriesLineChart';

describe('<TimeSeriesLineChart />', () => {
  test('it should mount', () => {
    render(<TimeSeriesLineChart />);
    
    const timeSeriesLineChart = screen.getByTestId('TimeSeriesLineChart');

    expect(timeSeriesLineChart).toBeInTheDocument();
  });
});