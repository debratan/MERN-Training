import React, { useState, useCallback } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = useCallback((id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
