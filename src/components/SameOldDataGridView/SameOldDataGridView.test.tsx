import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SameOldDataGridView from './SameOldDataGridView';

describe('<SameOldDataGrid />', () => {
  test('it should mount', () => {
    render(
      <SameOldDataGridView/>);
    
    const autocompleteControl = screen.getByTestId('Autocomplete');
    expect(autocompleteControl).toBeInTheDocument();

    const selectControl = screen.getByTestId('SelectControl');
    expect(selectControl).toBeInTheDocument();
  });
});