//css inherits from event reg
import AuthorityAllServicesMenu from "../../../../componants/authorityAllServicesMenu/authorityAllServicesMenu";
import AuthorityNavBar from "../../../../componants/navbar/authorityLoginUserNavBar";

const AuthorityEventRequests= () => {
  return (
    <div >
    <AuthorityNavBar/>
    <div className="events-reg">
      <div className="main">
        <div className="left-grp">
          <AuthorityAllServicesMenu/>
        </div>
        <div className="right-grp">
         
          <div className="right-grp-child-registeredEvent"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AuthorityEventRequests;
