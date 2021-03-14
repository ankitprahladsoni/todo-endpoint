import { TODO, TODOResponse } from '../components/model';

const API_KEY =
  'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c';
const API_URL = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io';

const headers = { 'X-Api-Key': API_KEY };

export const fetchTodos = async (): Promise<TODO[]> => {
  const response = await fetch(`${API_URL}/get`, { headers });
  const todos: TODOResponse[] = await response.json();
  return todos.map((t) => ({
    ...t,
    dueDate: t.dueDate ? new Date(t.dueDate) : undefined,
    isOverdue: t.dueDate ? new Date(t.dueDate) < new Date() : false,
  }));
};

export const updateTodo = async (id: string, isComplete: boolean) => {
  await fetch(`${API_URL}/patch/${id}`, {
    headers,
    method: 'PATCH',
    body: JSON.stringify({ isComplete }),
  });
};
