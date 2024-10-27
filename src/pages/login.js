import React from 'react';
import LoginForm from '../components/auth/loginForm';
import { useNavigate } from 'react-router-dom';

function Login() {
    
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createUser');  // Navigate to the CreateUser page
  };
  
    return (
    <div>
      <h1>Login</h1>
        <LoginForm/>
        <br/>
        <button onClick={handleClick}> Create New User </button>
    </div>
  );
}

export default Login