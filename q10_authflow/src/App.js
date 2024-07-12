import React from 'react';
import './App.css';
import { AuthProvider } from './component/AuthContext';
import Login from './component/Login';
import Logout from './component/Logout';
import CurrentUser from './component/Currentuser';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
        <Logout />
        <hr />
        <CurrentUser />
      </div>
    </AuthProvider>
  );
};

export default App;
