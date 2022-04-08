import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChartDrilldown from './ChartDrilldown';

describe('<ChartDrilldown />', () => {
  test('it should mount', () => {
    render(<ChartDrilldown />);
    
    const chartDrilldown = screen.getByTestId('ChartDrilldown');

    expect(chartDrilldown).toBeInTheDocument();
  });
});