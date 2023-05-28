import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header-container">
        <div className="header-logodiv">
          <span className="header-logotext">IntelStu</span>
        </div>

        <div className="header-tabsdiv">
          <NavLink className="header-tab">Home</NavLink>
          <NavLink className="header-tab">About us</NavLink>
          <NavLink className="header-tab">Contact us</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
