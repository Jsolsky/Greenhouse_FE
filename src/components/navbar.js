import React from "react";
import '../App.css';

const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="Logo.png" alt="Logo" width="50px"/>
        </div>
        <div className="nav-links">
          <button className="nav-footer-button">Overview</button>
          <button className="nav-footer-button">Data</button>
          <button className="nav-footer-button">Settings</button>
          <button className="nav-footer-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  export default Navbar;