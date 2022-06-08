import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BubbleMap from './BubbleMap';

describe('<BubbleMap />', () => {
  test('it should render', () => {
    render(<BubbleMap />);
    
    const bubbleMap = screen.getByTestId('BubbleMap');
    expect(bubbleMap).toBeInTheDocument();

    const headers = screen.getAllByText(/Order/i);
    expect(headers).toHaveLength(2)
  });
});