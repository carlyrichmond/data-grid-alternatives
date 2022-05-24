import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders portal headers and navigation', () => {
  render(<App />);
  const portalHeader = screen.getByText(/Sales Portal/i);
  expect(portalHeader).toBeInTheDocument();

  const companyName = screen.getByText(/ACME/i);
  expect(companyName).toBeInTheDocument();

  /*const headers = screen.getAllByRole(/tab/i);
  expect(headers.length).toBe(8)*/
});
