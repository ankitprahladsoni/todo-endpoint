import { FC, useCallback, useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { fetchTodos as fetchTodosAPI } from './api';
import { TODO } from './model';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList: FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<TODO[]>([]);

  const fetchTodo = useCallback(async () => {
    const response = await fetchTodosAPI();
    setTodos(response);
  }, []);

  useEffect(() => {
    fetchTodo();
  }, []);

  const overdueTodos: TODO[] = [];
  const incompleteTodos = [];
  const completeTodos = [];

  todos
    .sort((t1, t2) => {
      if (!t1.dueDate) {
        return 1;
      }
      if (!t2.dueDate) {
        return -1;
      }
      return t1.dueDate.getTime() - t2.dueDate.getTime();
    })
    .forEach((t) => {
      if (t.isComplete) {
        completeTodos.push(t);
      } else if (t.isOverdue) {
        overdueTodos.push(t);
      } else {
        incompleteTodos.push(t);
      }
    });

  return (
    <List className={classes.root}>
      {overdueTodos.map((t) => (
        <Todo
          key={t.id}
          description={t.description}
          isComplete={t.isComplete}
          dueDate={t.dueDate}
          id={t.id}
          isOverdue={t.isOverdue}
        />
      ))}
    </List>
  );
};

export default TodoList;
