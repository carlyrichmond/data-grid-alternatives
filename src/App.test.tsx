import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders portal headers and navigation', () => {
  render(
    <Router>
      <App />
    </Router>);
  const portalHeader = screen.getByText(/Sales Portal/i);
  expect(portalHeader).toBeInTheDocument();

  const companyName = screen.getByText(/ACME/i);
  expect(companyName).toBeInTheDocument();

  const headers = screen.getAllByRole('tab');
  expect(headers).toHaveLength(9);
});