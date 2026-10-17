import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App smoke test', () => {
  it('renders the portfolio home shell and navigation landmarks', () => {
    render(<App />);

    expect(screen.getByText(/whoami/i)).toBeTruthy();
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/skip to main content/i)).toBeTruthy();
    expect(screen.getByLabelText(/devops portfolio home/i)).toBeTruthy();
  });
});
