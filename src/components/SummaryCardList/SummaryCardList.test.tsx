import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCardList from './SummaryCardList';

describe('<SummaryCardList />', () => {
  test('it should mount', () => {
    render(<SummaryCardList />);
    
    const summaryCardList = screen.getByTestId('SummaryCardList');

    expect(summaryCardList).toBeInTheDocument();
  });
});