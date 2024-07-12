
import React from 'react';
import ChatApp from './component/Chat';
import { AuthProvider } from './component/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ChatApp />
    </AuthProvider>
  );
};

export default App;
