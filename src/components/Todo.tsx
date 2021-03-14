import { FC } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { updateTodo } from '../api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overdue: { backgroundColor: theme.palette.error.main },
    incompleted: { backgroundColor: theme.palette.primary.light },
    completed: {
      backgroundColor: theme.palette.success.main,
      textDecoration: 'line-through',
    },
  })
);

type TodoProps = {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate?: Date;
  isOverdue: boolean;
  onToggle: () => void;
};
const Todo: FC<TodoProps> = ({
  id,
  description,
  isComplete,
  dueDate,
  isOverdue,
  onToggle,
}) => {
  const classes = useStyles();
  const handleToggle = (id: string, isComplete: boolean) => {
    // ignoring the response as it is always a success
    updateTodo(id, isComplete);
    onToggle();
  };

  const className = isComplete
    ? classes.completed
    : isOverdue
    ? classes.overdue
    : classes.incompleted;

  return (
    <ListItem
      role={undefined}
      dense
      button
      divider
      className={className}
      onClick={() => handleToggle(id, isComplete)}
    >
      <ListItemIcon>
        <Checkbox edge="start" checked={isComplete} tabIndex={-1} />
      </ListItemIcon>
      <ListItemText id={id} primary={description} />
      <ListItemSecondaryAction>
        {dueDate?.toLocaleDateString()}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
