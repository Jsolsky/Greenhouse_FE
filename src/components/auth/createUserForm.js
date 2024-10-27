import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const API_URL = process.env.REACT_APP_API_URL;
      // Send credentials to the back-end
      const response = await fetch(`${API_URL}/userCreate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('User created in successfully');
        navigate('/login');
      } else {
        console.log('User creation failed', data.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create New User</button>
      </form>
    );
  }
  
export default CreateUserForm;