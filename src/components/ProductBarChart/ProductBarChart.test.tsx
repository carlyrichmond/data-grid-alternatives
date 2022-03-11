import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BarChart from './ProductBarChart';

describe('<ProductBarChart />', () => {
  test('it should mount', () => {
    render(<BarChart />);
    
    const barChart = screen.getByTestId('ProductBarChart');

    expect(barChart).toBeInTheDocument();
  });
});