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
          <button className="nav-button">Overview</button>
          <button className="nav-button">Data</button>
          <button className="nav-button">Settings</button>
          <button className="nav-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  export default Navbar;