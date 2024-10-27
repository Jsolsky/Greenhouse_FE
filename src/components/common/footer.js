import React from "react";
import '../../App.css';

function Footer() {
    return (
      <div className ="App-footer-background">
          <div className ="App-2-column">
            <p className ="App-footer-text" style={{fontWeight: 'bold'}}>CONTACT US</p>
            <p className ="App-footer-text">Phone number: 1300 111 222</p>
            <p className ="App-footer-text">Email: helpdesk@automatedgreenhouse.com.au</p>
            <p className ="App-footer-text">Social media: Facebook, Instagram</p>
          </div>
          <div className ="App-2-column" style = {{textAlign: 'center'}}>
            <p className ="App-footer-text" style={{fontWeight: 'bold', fontSize:'18px', padding: '10px'}}>JOIN OUR COMMUNITY PAGE </p>
            <button className = "nav-footer-button">Click here!</button>
          </div>
        </div>
    );
  }

 export default Footer;