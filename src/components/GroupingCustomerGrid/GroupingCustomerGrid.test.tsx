import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupingCustomerGrid from './GroupingCustomerGrid';

describe('<GroupingCustomerGrid />', () => {
  test('it should render grouping grid', () => {
    render(<GroupingCustomerGrid />);
    
    const groupingCustomerGrid = screen.getByTestId('GroupingGridContainer');
    expect(groupingCustomerGrid).toBeInTheDocument();

    const pivotTableCells = screen.getAllByRole('presentation');
    expect(pivotTableCells.length).toBeGreaterThan(1);
  });
});