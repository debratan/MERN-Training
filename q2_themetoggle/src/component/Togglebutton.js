// src/ThemeToggleButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {state.theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggleButton;
