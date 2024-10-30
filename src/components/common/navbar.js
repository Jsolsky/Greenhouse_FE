import React from "react";
import '../../App.css';
import logo from '../../Logo.png'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.clear();
      navigate('/login');
    };
  
  const navigateSettings = () => {
      // localStorage.removeItem('token');
      navigate('/setting');
    };
  
  const navigateDashboard = () => {
      // localStorage.removeItem('token');
      navigate('/dashboard');
    };
  
  const navigateData = () => {
      // localStorage.removeItem('token');
      navigate('/data');
    };

    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" width="50px"/>
        </div>
        <div className="nav-links">
          <button className="nav-footer-button" onClick={navigateDashboard}>Overview</button>
          <button className="nav-footer-button" onClick={navigateData}>Data</button>
          <button className="nav-footer-button" onClick={navigateSettings} >Settings</button>
          <button className="nav-footer-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  export default Navbar;