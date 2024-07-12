import React from 'react';
import { useAuth } from './AuthContext';

const CurrentUser = () => {
  const { state } = useAuth();

  return (
    <div>
      <h2>Current User</h2>
      {state.isAuthenticated ? (
        <p>Welcome, {state.user}</p>
      ) : (
        <p>Please login to view the current user.</p>
      )}
    </div>
  );
};

export default CurrentUser;
