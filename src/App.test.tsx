import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a todo', async () => {
  render(<App />);

  const todo = await screen.findByText(/Run LA marathon/i);

  expect(todo).toBeInTheDocument();
});

test('shows toasts when todo is updated', async () => {
  render(<App />);

  const todo = await screen.findByText(/Run LA marathon/i);
  expect(todo).toBeInTheDocument();
  userEvent.click(todo);
  await waitFor(() => {
    expect(
      screen.getByText(/'Run LA marathon' has been marked as completed/i)
    ).toBeInTheDocument();
  });
  userEvent.click(todo);
  await waitFor(() => {
    expect(
      screen.getByText(/'Run LA marathon' has been marked as not completed/i)
    ).toBeInTheDocument();
  });
});
