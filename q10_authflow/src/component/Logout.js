import React from 'react';
import { useAuth, LOGOUT } from './AuthContext';

const Logout = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
