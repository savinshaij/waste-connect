import React from "react";
import button from "./b.png";
import './backbutton.css';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Backbutton() {
 
    
      
      
  const navigate = useNavigate();
    return (
        <>
          <div className="backbotton">
       <img  className="button" src={button} alt="back"  onClick={() => navigate(-1)}></img>
       </div>
        </>
    );
  
 
}

export default Backbutton;