import React from "react";
//inherit myrequest css in user side 
import { NavLink } from "react-router-dom";

export const AuthorityAllServicesMenu = () => {
    

    return (
        <div className="RequestSideMenu-box">
            <div className="RequestSideMenu-group">
                <div className="RequestSideMenu-div">
                <NavLink to="/AuthorityRequest/AuthorityServiceRequests" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    service request</NavLink>
                <NavLink to="/AuthorityRequest/AuthorityServiceRequestsCancelled" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                     service cancelled</NavLink>      
                <NavLink to="/AuthorityRequest/AuthorityReportRequests" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> 
                report request</NavLink>  
                <NavLink to="/AuthorityRequest/ARCancelled" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    report cancelled</NavLink>
                <NavLink to="/AuthorityRequest/AE" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                     event requests</NavLink>      
                <NavLink to="/AuthorityRequest/AECancelled" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                     event cancelled</NavLink>    
                <NavLink to="/AuthorityRequest/AuthoritycompletedRequest" id="RequestSideMenu-MenuButton" className={ ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    completed</NavLink>

                   
                </div>
            </div>
        </div>
    );
};
export default AuthorityAllServicesMenu;