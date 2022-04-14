import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StackedProductBarChart from './StackedProductBarChart';

describe('<StackedProductBarChart />', () => {
  test('it should mount', () => {
    render(<StackedProductBarChart />);
    
    const stackedProductBarChart = screen.getByTestId('StackedProductBarChart');

    expect(stackedProductBarChart).toBeInTheDocument();
  });
});