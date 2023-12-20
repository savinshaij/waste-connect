import React from "react";
import "./serviceReg.css";
import Image from "./servicereqimg.svg"
import { useState } from "react";
import LoginUserNavBar from "../../componants/navbar/LoginUserNavBar";

function ServiceReg() {
  return (
    <div className="ServiceReg">
      <LoginUserNavBar/>
      <div className="left-container-ServiceReg"><img src={Image}/></div>
      <div className="right-container-ServiceReg">
        <div className="ServiceReg-form-div">
            <form className="ServiceReg-form">

           
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Name</label>
            <input className="ServiceReg-name-input"></input>
          </div>
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Phone Number</label>
            <input className="ServiceReg-name-input"></input>
          </div>
         
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Address of requester</label>
            <input className="ServiceReg-name-input"></input>
          </div>
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">location</label>
            <input className="ServiceReg-name-input"></input>
          </div>
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Service Details</label>
            <textarea type="textarea" className="ServiceReg-name-textarea"></textarea>
          </div>
          <div className="ServiceReg-btn-grp">
            <button className="ServiceReg-clear-btn" >clear</button>
            <button className="ServiceReg-submit-btn" >submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceReg;
