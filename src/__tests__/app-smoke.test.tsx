import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App smoke test', () => {
  it('renders the portfolio home shell', () => {
    render(<App />);

    expect(screen.getByText(/whoami/i)).toBeTruthy();
    expect(screen.getByRole('navigation')).toBeTruthy();
  });
});
