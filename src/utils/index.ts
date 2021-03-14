import { TODO } from '../components/model';

export const sortTodos = (todos: TODO[]): TODO[] => {
  return [...todos].sort((t1, t2) => {
    if (t1.isComplete && !t2.isComplete) {
      return 1;
    } else if (!t1.isComplete && t2.isComplete) {
      return -1;
    } else return compareDate(t1, t2);
  });
};

const compareDate = (t1: TODO, t2: TODO): number => {
  if (!t2.dueDate) {
    return -1;
  }
  if (!t1.dueDate) {
    return 1;
  }
  return t1.dueDate.getTime() - t2.dueDate.getTime();
};
