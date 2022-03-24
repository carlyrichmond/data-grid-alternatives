import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupingCustomerGrid from './GroupingCustomerGrid';

describe('<GroupingCustomerGrid />', () => {
  test('it should mount', () => {
    render(<GroupingCustomerGrid />);
    
    const groupingCustomerGrid = screen.getByTestId('GroupingCustomerGrid');

    expect(groupingCustomerGrid).toBeInTheDocument();
  });
});