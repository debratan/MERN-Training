import React, { useState, useMemo } from 'react';

const App = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Laptop', price: 1000 },
    { id: 2, product: 'Headphones', price: 100 },
    { id: 3, product: 'Keyboard', price: 150 },
  ]);

  const totalOrderValue = useMemo(() => {
    console.log('Calculating total order value...');
    return orders.reduce((total, order) => total + order.price, 0);
  }, [orders]);

  const handleDeleteOrder = (id) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h1>List of Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.product} - ${order.price}
            <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Total Order Value: ${totalOrderValue}</h2>
    </div>
  );
};

export default App;
