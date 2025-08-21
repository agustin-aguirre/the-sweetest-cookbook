import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from "../src/components/Toggle";

test('toggles visibility on click', () => {
  render(<Toggle />);
  const button = screen.getByText(/toggle/i);

  // Antes del clic
  expect(screen.queryByText(/i'm visible/i)).toBeNull();

  // Después del clic
  fireEvent.click(button);
  expect(screen.getByText(/i'm visible/i)).toBeInTheDocument();
});