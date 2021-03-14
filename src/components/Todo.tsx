import { FC } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

type TodoProps = {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate?: Date;
  isOverdue: boolean;
};
const Todo: FC<TodoProps> = ({
  id,
  description,
  isComplete,
  dueDate,
  isOverdue,
}) => {
  const handleToggle = (id: string) => {
    console.log('updating', id);
  };

  return (
    <ListItem role={undefined} dense button onClick={() => handleToggle(id)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={isComplete} tabIndex={-1} />
      </ListItemIcon>
      <ListItemText id={id} primary={description} />
      <ListItemSecondaryAction>
        {dueDate?.toDateString()}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
