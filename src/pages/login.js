import React from 'react';
import LoginForm from '../components/auth/loginForm';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

function Login() {
    
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createUser');  // Navigate to the CreateUser page
  };
  
    return (
      <div classNAme ="App">
      <Header/>
      <div className ="App-homepage">
        <h2 className = "App-body-h2">Login</h2>
        <LoginForm/>
        <br/>
        <button onClick={handleClick}> Create New User </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Login