import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Paw&Pearl header or home elements', () => {
  render(<App />);
  const titleElement = screen.getByText(/El cuidado premium que tu mascota merece/i);
  expect(titleElement).toBeInTheDocument();
});