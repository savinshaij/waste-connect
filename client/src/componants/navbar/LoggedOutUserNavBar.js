import React from "react";
import "./NavBar.css";
import logo from "./3.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="nav">
    <img  className="logo" src={logo} alt="logo"></img>
        
    <ul className="navlist">
      
    <li> <NavLink to="/about" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
       
    </ul>

   </div>
    </div>
  );
}

export default NavBar;