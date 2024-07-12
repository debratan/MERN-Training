
import React, { useReducer } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
}

function validateForm({ username, email, password }) {
  const errors = {};
  if (!username) errors.username = 'Username is required';
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  if (!password) errors.password = 'Password is required';
  return errors;
}

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(state);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
    } else {
      console.log('Form submitted:', state);
      dispatch({ type: 'CLEAR_FORM' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        {state.errors.username && <p>{state.errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && <p>{state.errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        {state.errors.password && <p>{state.errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
