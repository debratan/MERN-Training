import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const handleDeleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>

      <div>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
