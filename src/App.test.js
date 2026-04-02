import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app title', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const titleElement = screen.getByText(/Artisan Connect Mobile/i);
  expect(titleElement).toBeInTheDocument();
});
