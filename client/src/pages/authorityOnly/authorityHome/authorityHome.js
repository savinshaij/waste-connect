import React from "react";

import image1 from "./image_1.png";
import {Link} from "react-router-dom";
import AuthorityNavBar from "../../../componants/navbar/authorityLoginUserNavBar";


function Ahome() {
  return (
    <div className="mainHomeDiv">
        <AuthorityNavBar/>
      
         <section>
        <div class="homeimg1">
            <img className="image1" src={image1} alt="home_graphic"/>
        </div>
        <div class="left-container">
            <div className="text">
            <h1 className="heading">WasteConnect</h1>
            <h2 className="subheading" >ADMIN LOGIN</h2>
            <p className="text1">
            </p>
            <br/>  
            <div className="buttonBox">
            <Link to=""> <button className="service-request">service request</button></Link>
            <Link to="/event"><button className="event-registration">Event registration</button></Link>
            <Link to=""><button className="report-button">Report</button></Link>
            </div>
           
            
            </div>
                 
            
        </div>
    </section>
    </div>
  );
}

export default Ahome;