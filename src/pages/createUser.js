import React from 'react';
import CreateUserForm from '../components/auth/createUserForm';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/login');  // Navigate to the CreateUser page
    };
    
    return (
        <div>
            <h1> Create New User </h1>
            <CreateUserForm/>
            <br/>
            <button onClick={handleClick}>Return to Login</button>
        
        </div>
    );
  }

export default CreateUser;