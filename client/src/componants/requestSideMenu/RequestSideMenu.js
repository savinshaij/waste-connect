import React from "react";
import "./RequestSideMenu.css";
import { NavLink } from "react-router-dom";

export const RequestSideMenu = () => {
    

    return (
        <div className="RequestSideMenu-box">
            <div className="RequestSideMenu-group">
                <div className="RequestSideMenu-div">
                <NavLink to="/my-requests/my-services-requests" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>service request</NavLink>
                <NavLink to="/my-requests/my-report-requests" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> report request</NavLink>      
                <NavLink to="/my-requests/my-approved-requests" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Approved</NavLink>  
                    
               
                 
                   
                </div>
            </div>
        </div>
    );
};
export default RequestSideMenu;
