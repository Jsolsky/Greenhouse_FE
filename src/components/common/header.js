import React from "react";
import '../../App.css';
import logo from '../../Logo.png'

function Header() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" width="50px"/>
        </div>
      </div>
    );
  }

  export default Header;