import React from "react";
import "./home.css";
import image1 from "./image_1.png";
import {Link} from "react-router-dom";
import  LoginUserNavBar from "../../componants/navbar/LoginUserNavBar"
import StaggeredDropDown from "../../componants/homeDrop/homeDrop"

function home() {
  return (
    <div className="mainHomeDiv">
        <LoginUserNavBar/>
      
         <section>
        <div class="homeimg1">
            
        </div>
        <div class="left-container">
            <div className="text">
            <label className="home-heading"><span className="home-heading-w">W</span>aste<span className="home-heading-w">C</span>onnect</label>
            <p className="home-text1">Join WasteConnect to report waste-related issues or request efficient
 waste collection services, contributing to cleaner and more sustainable
 communities with just a click.
            </p>
            <br/>  
            <div className="buttonBox">
           {/*<Link to="/service-request"> <button className="service-request">service request</button></Link>
            <Link to="/event"><button className="event-registration">Event registration</button></Link>
            <Link to="/report-request"><button className="report-button">Report</button></Link>*/}
           < StaggeredDropDown/>
            </div>
           
            
            </div>
                 
            
        </div>
    </section>
    </div>
  );
}

export default home;