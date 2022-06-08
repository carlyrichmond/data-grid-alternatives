import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChartDrilldown from './ChartDrilldown';

describe('<ChartDrilldown />', () => {
  test('it should mount', () => {
    render(<ChartDrilldown />);
    
    const barChart = screen.getByTestId('DashboardBarChart');
    expect(barChart).toBeInTheDocument();

    const chordDiagram = screen.getByTestId('DashboardChordDiagram');
    expect(chordDiagram).toBeInTheDocument();

    const grid = screen.getByTestId('DashboardGrid');
    expect(grid).toBeInTheDocument();
  });
});