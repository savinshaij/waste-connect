import React from "react";
import "./LandingPage.css";
import image1 from "./image_1.png";
import {Link} from "react-router-dom";
import  LoggedOutUserNavBar  from "../../componants/navbar/LoggedOutUserNavBar"
import { useState } from 'react';

function LandingPage() {
  
 
  return (
    <div className="landingPageMain">
    <LoggedOutUserNavBar/>
       
     
        
         <section>
        <div className="homeimg">
            <img className="image" src={image1} alt="home_graphic"/>
        </div>
        <div className="left-container-landingpage">
            <div className="text">
              
            <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Waste</div>
          <div className="div">Connect</div>
        </div>
      </div>
    </div>
           
            <p className="text1">Its a user-friendly website that connects users with garbage collectors and provides a platform for authorities to coordinate waste disposal during special events.
<br></br><br></br>This platform offers tools and resources to facilitate efficient waste management and prompt responses to increased waste generation.
            </p>
            <br/>  
            <div className="buttonBox">
            <Link to="/Login"> <button  className="login-button">Login</button></Link>
            <Link to="/Signup"><button className="signup-button">SignUp</button></Link>
           
            </div>
           
            
            </div>
                 
            
        </div>
    </section>
    
    </div>
  );
}

export default LandingPage;