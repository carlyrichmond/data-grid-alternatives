import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductColumnChart from './ProductColumnChart';

describe('<ProductColumnChart />', () => {
  test('it should render the column chart', () => {
    render(<ProductColumnChart/>);
    
    const customerLabel = screen.getByText('W.E. Coyote');
    expect(customerLabel).toBeInTheDocument();
  });
});