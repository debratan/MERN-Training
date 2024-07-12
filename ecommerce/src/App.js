
import React, { useContext } from 'react';
import { CartProvider, CartContext } from './component/CartContext';
import ProductList from './component/ProductList';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h2>Cart ({cart.length} items)</h2>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default App;
