import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataGrid from './DataGrid';

describe('<DataGrid />', () => {
  test('it should mount', () => {
    render(<DataGrid />);
    
    const dataGrid = screen.getByTestId('DataGrid');

    expect(dataGrid).toBeInTheDocument();
  });
});