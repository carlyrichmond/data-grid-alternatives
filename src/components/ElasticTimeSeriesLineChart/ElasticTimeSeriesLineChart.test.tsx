import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ElasticTimeSeriesLineChart from './ElasticTimeSeriesLineChart';

describe('<ElasticTimeSeriesLineChart />', () => {
  test('it should mount', () => {
    render(<ElasticTimeSeriesLineChart />);
    
    const elasticTimeSeriesLineChart = screen.getByTestId('ElasticTimeSeriesLineChart');

    expect(elasticTimeSeriesLineChart).toBeInTheDocument();
  });
});