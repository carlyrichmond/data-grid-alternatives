import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductColumnChart from './ProductColumnChart';

describe('<ProductColumnChart />', () => {
  test('it should mount', () => {
    render(<ProductColumnChart/>);
    
    const barChart = screen.getByTestId('ProductColumnChart');

    expect(barChart).toBeInTheDocument();
  });
});