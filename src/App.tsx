import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import ConsecutiveSnackbars from './components/ConsecutiveSnackbars';

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <header className="App-header">Endpoint TODO App challenge</header>
      <TodoList
        showToast={(message: string) => {
          setOpen(true);
          setMessage(message);
        }}
      />
      <ConsecutiveSnackbars message={message} isopen={open} />
    </div>
  );
}

export default App;
