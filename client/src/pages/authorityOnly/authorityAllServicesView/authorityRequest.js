
//css inherits from event reg
import AuthorityAllServicesMenu from "../../../componants/authorityAllServicesMenu/authorityAllServicesMenu";
import AuthorityNavBar from "../../../componants/navbar/authorityLoginUserNavBar";
const AuthorityRequest= () => {
  return (
    <div>
      <AuthorityNavBar/>

      <div className="events-reg">
        <div className="main">
          <div className="left-grp">
            <AuthorityAllServicesMenu/>
          </div>
          <div className="my-request-right-grp">
            <div className="my-request-group1">
            Your <span  className="service-request-bold2">service requests</span> are our first priority
            </div>
            <div className="my-request-group2">
             
             <span>
             <div className="point"/>
            Your all service and report pending requests are available in <span  className="service-request-bold1"> service requests</span> and <span  className="service-request-bold1">Report requests</span></span>
            </div>
             
              
             
             

            <div className="my-request-group3" >
            
            <span>
            <div className="point"/>
            All the approved and completed services ,reports and events registration are in the <span className="service-request-bold1">Approved </span>  
           
            </span>
             
            </div>
            <div className="my-request-group4">
 Registrered event details you can get it from event registration in Home page
            
            </div>
         

         
        

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityRequest;
