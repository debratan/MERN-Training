import React, { useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a message..."
        ref={inputRef}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
