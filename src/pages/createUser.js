import React from 'react';
import CreateUserForm from '../components/auth/createUserForm';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

function CreateUser() {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/login');  // Navigate to the CreateUser page
    };
    
    return (
        <div classNAme ="App">
        <Header/>
        <div className ="App-homepage">
          <h2 className = "App-body-h2">Create New User</h2>
          <CreateUserForm/>
            <br/>
            <button onClick={handleClick}>Return to Login</button>
        </div>
        <Footer/>
        </div>
    );
  }

export default CreateUser;