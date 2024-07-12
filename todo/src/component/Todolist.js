import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:3001/todos')
        .then(response => setTodos(response.data))
        .catch(error => console.error(error));
    }
  }, [isLoggedIn]);

  const addTodo = () => {
    if (newTodo.trim()) {
      axios.post('http://localhost:3001/todos', { text: newTodo, completed: false })
        .then(response => setTodos([...todos, response.data]))
        .catch(error => console.error(error));
      setNewTodo('');
    }
  };

  const updateTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:3001/todos/${id}`, updatedTodo)
      .then(response => {
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
      })
      .catch(error => console.error(error));
  };

  const deleteTodo = id => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    isLoggedIn ? (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.text}
                onChange={(e) => updateTodo(todo.id, { ...todo, text: e.target.value })}
              />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Please login to view your todoslist.</p>
    )
  );
};

export default TodoList;
