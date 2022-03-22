import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SameOldDataGrid from './SameOldDataGrid';

describe('<SameOldDataGrid />', () => {
  test('it should mount', () => {
    render(<SameOldDataGrid />);
    
    const sameOldDataGrid = screen.getByTestId('SameOldDataGrid');

    expect(sameOldDataGrid).toBeInTheDocument();
  });
});