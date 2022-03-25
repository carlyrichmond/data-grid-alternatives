import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GiftCardChordDiagram from './GiftCardChordDiagram';

describe('<GiftCardChordDiagram />', () => {
  test('it should mount', () => {
    render(<GiftCardChordDiagram />);
    
    const giftCardChordDiagram = screen.getByTestId('GiftCardChordDiagram');

    expect(giftCardChordDiagram).toBeInTheDocument();
  });
});