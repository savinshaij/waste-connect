import React from "react";
import "./reportReg.css";
import Image from "./reportreqimg.svg"
import { useState } from "react";
import LoginUserNavBar from "../../componants/navbar/LoginUserNavBar";
import ImageUpload from "./imageUpload/imageUpload";

function ReportReg() {
  return (
    <div className="ServiceReg">
      <LoginUserNavBar/>
      <div className="left-container-ServiceReg"><img src={Image}/></div>
      <div className="right-container-ServiceReg">
        <div className="ServiceReg-form-div">
            <form className="ServiceReg-form">

           
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Location</label>
            <input className="ServiceReg-name-input"></input>
          </div>
       <ImageUpload  />
          <div className="ServiceReg-name">
            <label className="ServiceReg-name-label">Report Details</label>
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

export default ReportReg;