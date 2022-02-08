import { render, screen } from '@testing-library/react';
import App from './App';

test('dummy unit test', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Landing Page/i);
  expect(linkElement).toBeTruthy();
});
