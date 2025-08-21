import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/components/Counter';

test('increments counter on click', () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  const countText = screen.getByTestId('count');

  expect(countText).toHaveTextContent('Count: 0');
  fireEvent.click(button);
  expect(countText).toHaveTextContent('Count: 1');
});