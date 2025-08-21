import { render, screen } from '@testing-library/react';
import User from '../src/components/User';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'Alice' }),
  })
);

test('fetches and displays user name', async () => {
  render(<User />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  const greeting = await screen.findByText(/hello, alice/i);
  expect(greeting).toBeInTheDocument();
});