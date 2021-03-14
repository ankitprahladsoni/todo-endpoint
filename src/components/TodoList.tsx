import { FC, useCallback, useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fetchTodos as fetchTodosAPI } from './api';
import { TODO } from './model';
import Todo from './Todo';
import { sortTodos } from './utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: 'auto',
      maxWidth: 360,
    },
  })
);

const TodoList: FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<TODO[]>([]);

  const fetchTodo = useCallback(async () => {
    const response = await fetchTodosAPI();
    setTodos(response);
  }, []);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  const sortedTodos = sortTodos(todos);

  return (
    <List className={classes.root}>
      {sortedTodos.map((t) => (
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
