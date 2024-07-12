import React, { useContext } from 'react';
import { UserProvider, UserContext } from './component/UserContext';
import TodoList from './component/Todolist';

const LoginButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>
  );
};

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <LoginButton />
        <TodoList />
      </div>
    </UserProvider>
  );
};

export default App;
