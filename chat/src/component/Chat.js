
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchMessages, 5000); 
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (newMessage) => {
    try {
      await axios.post('http://localhost:3001/messages', newMessage);
      fetchMessages(); 
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.sender}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      {isLoggedIn ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newMessage = { sender: 'current user', text: e.target.elements.message.value };
              sendMessage(newMessage);
              e.target.elements.message.value = '';
            }}
          >
            <input type="text" name="message" placeholder="Type your message" />
            <button type="submit">Send</button>
          </form>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default ChatApp;
