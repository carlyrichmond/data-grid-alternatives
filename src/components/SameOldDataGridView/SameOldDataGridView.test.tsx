import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SameOldDataGridView from './SameOldDataGridView';

describe('<SameOldDataGrid />', () => {
  test('it should mount', () => {
    render(<SameOldDataGridView/>);
    
    const sameOldDataGridView = screen.getByTestId('SameOldDataGridView');

    expect(sameOldDataGridView).toBeInTheDocument();
  });
});