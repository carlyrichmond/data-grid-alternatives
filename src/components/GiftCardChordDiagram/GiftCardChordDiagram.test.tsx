import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GiftCardChordDiagram from './GiftCardChordDiagram';

describe('<GiftCardChordDiagram />', () => {
  test('it should render the chord diagram', () => {
    render(<GiftCardChordDiagram />);
    
    const giftCardChordDiagramRibbon = screen.getByTestId('GiftCardChordDiagram');
    expect(giftCardChordDiagramRibbon).toBeInTheDocument();
  });
});