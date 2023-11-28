import React from "react";
import logo from "../assets/logo4.png";

import NavBtn from "./reusables/NavBtn";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo-container">
        <div className="navbar_logo-container-img" />

        <div className="navbar_title">all About dog food</div>
      </div>
      <div className="navbar_nav-container">
        {/* <div className="navbar_nav-container-item">trading</div>
        <div className="navbar_nav-container-item">forex</div>
        <div className="navbar_nav-container-item">cryto</div>
        <div className="navbar_nav-container-item">forum</div>
        <div className="navbar_nav-container-item">calendar</div>
        <div className="navbar_nav-container-item">tools</div> */}
        <NavBtn name="trading" />
        <NavBtn name="forex" />
        <NavBtn name="cryto" />
        <NavBtn name="forum" />
        <NavBtn name="calendar" />
        <NavBtn name="tools" />
      </div>

      <div className="navbar_tools">
        <div className="navbar_tools-container">
          <div>search</div>
          <div>login</div>
        </div>
        <div className="navbar_menu-container">
          <div className="navbar_hamburger navbar_hamburger-top"></div>
          <div className="navbar_hamburger navbar_hamburger-mid"></div>
          <div className="navbar_hamburger navbar_hamburger-bot"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
