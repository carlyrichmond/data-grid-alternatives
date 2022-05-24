import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCardList from './SummaryCardList';

describe('<SummaryCardList />', () => {
  test('it should render the list', () => {
    render(<SummaryCardList />);
    
    const summaryCardList = screen.getAllByText('items purchased to date');
    expect(summaryCardList).toHaveLength(2);
  });
});