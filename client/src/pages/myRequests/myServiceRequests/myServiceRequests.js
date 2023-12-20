

import LoginUserNavBar from "../../../componants/navbar/LoginUserNavBar"
import  RequestSideMenu from "../../../componants/requestSideMenu/RequestSideMenu"
const MyServiceRequests = () => {
 
  return (
   
    
    <div >
    <LoginUserNavBar />
    <div className="events-reg">
      <div className="main">
        <div className="left-grp">
          <RequestSideMenu />
        </div>
        <div className="right-grp">
          
          <div className="right-grp-child-registeredEvent"></div>
        </div>
      </div>
    </div>
  </div>
       

           
  );
};

export default MyServiceRequests;
