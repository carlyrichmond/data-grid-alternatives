import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataGrid, { FilterSelection } from './DataGrid';

describe('<DataGrid />', () => {
  test('it should mount', () => {
    const props: FilterSelection = { customerName: 'B. Bunny', productCategory: null };

    render(<DataGrid { ...props }/>);
    
    const dataGrid = screen.getByTestId('GridContainer');
    expect(dataGrid).toBeInTheDocument();

    const pivotTableCells = screen.getAllByRole('presentation');
    expect(pivotTableCells.length).toBeGreaterThan(1);
  });
});