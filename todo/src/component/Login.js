import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginButton = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  
    return (
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    );
  };