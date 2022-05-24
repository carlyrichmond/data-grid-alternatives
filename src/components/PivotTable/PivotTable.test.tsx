import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PivotTable from './PivotTable';

describe('<PivotTable />', () => {
  test('it should render pivot table', () => {
    render(<PivotTable />);
    
    const pivotTable = screen.getByTestId('PivotContainer');
    expect(pivotTable).toBeInTheDocument();

    const pivotTableCells = screen.getAllByRole('presentation');
    expect(pivotTableCells.length).toBeGreaterThan(1);
  });
});