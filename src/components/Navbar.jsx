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
        <NavBtn name="trading" />
        <NavBtn name="forex" />
        <NavBtn name="cryto" />
        <NavBtn name="forum" />
        <NavBtn name="calendar" />
        <NavBtn name="tools" />
      </div>

      <div className="navbar_tools">
        <div className="navbar_tools-container">
          <div className="navbar_tools-container-search">
            <span class="material-symbols-outlined">search</span>
          </div>
          <button className="loginBtn">signup</button>
        </div>
        <div className="navbar_menu-container">
          <div className="navbar_menu-container-menu">
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
