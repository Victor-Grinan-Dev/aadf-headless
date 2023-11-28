import React from "react";
import logo from "../assets/logo4.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo-container">
        <div>
          <img src={logo} alt="app-logo" className="navbar_app-logo" />
        </div>
        <div className="navbar_title">all About dog food</div>
      </div>
      <div className="navbar_menu-container">
        <div className="navbar_hamburger navbar_hamburger-top"></div>
        <div className="navbar_hamburger navbar_hamburger-mid"></div>
        <div className="navbar_hamburger navbar_hamburger-bot"></div>
      </div>
    </div>
  );
};

export default Navbar;
