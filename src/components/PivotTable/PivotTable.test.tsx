import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PivotTable from './PivotTable';

describe('<PivotTable />', () => {
  test('it should mount', () => {
    render(<PivotTable />);
    
    const pivotTable = screen.getByTestId('PivotTable');

    expect(pivotTable).toBeInTheDocument();
  });
});