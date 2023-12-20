import React, { useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login-signup/login';
import Signup from './pages/login-signup/signup';
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/home/Home';
import Profile from './pages/profile/profile/profile.js';
import Profile2 from './pages/profile/profileEdit/Profile2';
import EventsReg from './pages/eventRegistration/EventReg';
import RegisteredEvent from "./pages/eventRegistration/registeredEvents/registeredEvent"
import MyServiceRequests from "./pages/myRequests/myServiceRequests/myServiceRequests.js"
import MyReportRequests from './pages/myRequests/myReportRequests/myReportRequests.js';
import MyApprovedRequest from './pages/myRequests/myApprovedRequest/myApprovedRequest.js';
import MyRequests from './pages/myRequests/MyRequest.js';
import Feedback from './pages/feedback/feedback';
import About from "./pages/about/about.js"
import ReportReq from './pages/reportReg/reportReg.js';
import ServiceReq from './pages/serviceReg/serviceReg.js';

import AuthoritycompletedRequest from './pages/authorityOnly/authorityAllServicesView/authoritycompletedRequest/authoritycompletedRequest.js';
import AuthorityRequest from './pages/authorityOnly/authorityAllServicesView/authorityRequest.js';
import AuthorityReportRequests from './pages/authorityOnly/authorityAllServicesView/authorityEventRequests/authorityEventRequests.js';
import AuthorityEventRequestsCancelled from './pages/authorityOnly/authorityAllServicesView/authorityEventRequestsCancelled/authorityEventRequestsCancelled.js';
import AuthorityServiceRequests from './pages/authorityOnly/authorityAllServicesView/authorityServiceRequests/authorityServiceRequests.js';
import AuthorityServiceRequestsCancelled from './pages/authorityOnly/authorityAllServicesView/authorityServiceRequestsCancelled/authorityServiceRequestsCancelled.js';
import AuthorityEventRequests from './pages/authorityOnly/authorityAllServicesView/authorityEventRequests/authorityEventRequests.js';
import AuthorityReportRequestsCancelled from './pages/authorityOnly/authorityAllServicesView/authorityReportRequestsCancelled/authorityReportRequestsCancelled .js';
import Ahome from './pages/authorityOnly/authorityHome/authorityHome.js';

import {
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";


function App() {
  
  const USER_TYPE ={
    NOT_LOGEDIN_USER:"t",
    LOGEDIN_USER:"t",
    LOGEDIN_ADMIN:"t"

  }

 // const ppRef = useRef(true);
  const [CURRENT_USER_TYPE,setCURRENT_USER_TYPE] =useState(USER_TYPE.NOT_LOGEDIN_USER);
  


 const LoginSts =(data) => { {   
 //   ppRef.current = !ppRef.current;
 } 
}
//useEffect(() => {
  //alert("useeffectcalled") }, [ppRef.current])


  const router = createBrowserRouter([
    {
      path: "/",
      element:NotLogedinUser(<LandingPage/>) ,
    },
  
    {
      path: "login",
      element:NotLogedinUser(<Login loginSts={LoginSts}/>) ,
    },
  
    {
      path: "signup",
      element: NotLogedinUser(<Signup/>),
    },
    {
      path: "home",
      element:LogedinUser( <Home/>),
    },
    {
      path: "Ahome",
      element:LogedinUser( <Ahome/>),
    },
    {
      path: "profile",
      element:LogedinUser( <Profile/>),
    },
    {
      path: "profile-edit",
      element: LogedinUser(<Profile2/>),
    },
    {
     path: "event",
      element: LogedinUser(<EventsReg/>),
    },
    {
      path: "registered-event",
       element: LogedinUser(<RegisteredEvent/>),
     },
     {
      path: "report-request",
       element: LogedinUser(<ReportReq/>),
     },
     {
      path: "service-request",
       element: LogedinUser(<ServiceReq/>),
     },
     {
      path: "my-requests",
      element: LogedinUser(<MyRequests/>),
     
     },
     {
     path: "my-requests/my-services-requests",
     element: LogedinUser(<MyServiceRequests/>),
    },
    {

      path: "my-requests/my-approved-requests",
      element: LogedinUser(<MyApprovedRequest/>),
     },
     {

      path: "my-requests/my-report-requests",
      element: LogedinUser(<MyReportRequests/>),
     },
     {

      path: "feedback",
      element: LogedinUser(<Feedback/>),
     },
     {

      path: "about",
      element: LogedinUser(<About/>),
     },
     {

      path: "AuthorityRequest/ARCancelled",
      element: LogedinUser(<AuthorityReportRequestsCancelled/>),
     },
   
     {

      path: "AuthorityRequest/AuthorityServiceRequestsCancelled",
      element: LogedinUser(<AuthorityServiceRequestsCancelled/>),
     },
     {

      path: "AuthorityRequest/AuthorityServiceRequests",
      element: LogedinUser(<AuthorityServiceRequests/>),
     },
     {

      path: "AuthorityRequest/AE",
      element: LogedinUser(<AuthorityEventRequests/>),
     },
     {

      path: "AuthorityRequest/AECancelled",
      element: LogedinUser(<AuthorityEventRequestsCancelled/>),
     },
     {

      path: "AuthorityRequest/AuthoritycompletedRequest",
      element: LogedinUser(<AuthoritycompletedRequest/>),
     },
     {

      path: "AuthorityRequest/AuthorityReportRequests",
      element: LogedinUser(<AuthorityReportRequests/>),
     },
     {

      path: "AuthorityRequest",
      element: LogedinUser(<AuthorityRequest/>),
     },

  
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );

  function NotLogedinUser(childern) {
   if(true){
    return<> {childern} </>;
    }else{
     return <div>you don't have access to this page because you are already loggedin logout to go to that page</div>
  }
  }

  function LogedinUser(childern) {
    if(true){
    return<> {childern} </>;
    }else{
     return <div>you don't have access to this page because you are already loggedout login to go to that page</div>
  }
  }
}

export default App;
