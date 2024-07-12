
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { state } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return <div style={themeStyles}>This is a {state.theme} themed component!</div>;
};

export default ThemedComponent;
