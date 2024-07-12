
import React from 'react';
import { ThemeProvider } from './component/ThemeContext';
import ThemeToggleButton from './component/Togglebutton';
import ThemedComponent from './component/Themecomponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Toggle Application</h1>
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
