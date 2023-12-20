import React from "react";
import "./NavBar.css";
import logo from "./3.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar2() {
  return (
    <div>
      <div className="nav">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="navdiv">
          
          <ul className="navlist">
          <li> <NavLink to="/home" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
          <li> <NavLink to="/profile" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Profile</NavLink></li>
          <li> <NavLink to="/my-requests" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>My Requests</NavLink></li>
          <li> <NavLink to="/feedback" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Feedback</NavLink></li>
          <li> <NavLink to="/about" id="navLinks" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
        
        </ul>
        
       
      <Link to="/"><button className="LoginBtnNav">LOGOUT</button></Link>  
        </div>
       
      </div>
    </div>
  );
}

export default NavBar2;