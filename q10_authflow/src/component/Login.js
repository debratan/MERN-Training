import React, { useState } from 'react';
import { useAuth, LOGIN } from './AuthContext';

const Login = () => {
  const { dispatch } = useAuth();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch({ type: LOGIN, payload: username });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
