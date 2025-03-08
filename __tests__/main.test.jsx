import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Modifiez cette ligne
import App from '../src/App';

test('renders Vite + React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

