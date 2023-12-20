import React from "react";
import "./NavBar.css";
import logo from "./3.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function AuthorityNavBar() {
  return (
    <div>
      <div className="nav">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="navdiv">
          
          <ul className="navlist">
          <li> <NavLink to="/Ahome" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
          <li> <NavLink to="/AuthorityRequest" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>services</NavLink></li>
          
          <li> <NavLink to="/feedback" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>alert</NavLink></li>
          <li> <NavLink to="/about" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
        
        </ul>
        
       
      <Link to="/"><button className="LoginBtnNav">LOGOUT</button></Link>  
        </div>
       
      </div>
    </div>
  );
}

export default AuthorityNavBar;