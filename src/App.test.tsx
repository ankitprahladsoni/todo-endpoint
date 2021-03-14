import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/api', () => {
  return {
    fetchTodos: jest.fn().mockImplementation(() =>
      Promise.resolve([
        {
          id: '1',
          description: 'File 2020 Taxes',
          isComplete: true,
          dueDate: new Date('2020-03-10T17:50:44.673Z'),
          isOverdue: true,
        },
        {
          id: '2',
          description: 'Fold laundry',
          isComplete: true,
          isOverdue: false,
        },
        {
          id: '3',
          description: 'Call Mom',
          isComplete: false,
          dueDate: new Date('2020-06-26T19:00:00.000Z'),
          isOverdue: true,
        },
        {
          id: '4',
          description: 'Walk the dog',
          isComplete: false,
          isOverdue: false,
        },
        {
          id: '5',
          description: 'Feed the cat',
          isComplete: false,
          dueDate: new Date('2020-06-24T15:45:00.000Z'),
          isOverdue: true,
        },
        {
          id: '6',
          description: 'Run LA marathon',
          isComplete: false,
          dueDate: new Date('2021-03-21T13:30:00.000Z'),
          isOverdue: false,
        },
      ])
    ),
  };
});
test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.findByText(/Run LA marathon/i);
  screen.debug();
  expect(linkElement).toBeInTheDocument();
});
