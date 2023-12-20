import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

import LoginUserNavBar from "../../../componants/navbar/LoginUserNavBar"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../../../componants/popup/Popup";

function Profile2() {
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")
  const navigate = useNavigate();
  const[firstEmail,setfirstEmail]=useState('')
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: ""
    
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    // Fetch user data from the server and update the state
    axios
      .get("http://localhost:3001/profile-edit")
      .then((response) => {
        setUser(response.data);
        setfirstEmail(response.data.email)
      })
      .catch((err) => console.log(err));
  }, []);


  const saveChanges = () => {
    // Send a PUT request to update the user information
    axios
      .put("http://localhost:3001/profile-edit", user)
      .then((response) => {
        console.log("User information updated:", response.data);
      })
      .catch((err) => console.log(err));

      if(firstEmail!==user.email){
       
       navigate("/")
        
      }
      else{
        navigate("/profile")
      }
  };

  const back = () => {
    if(firstEmail!==user.email){
       
      setpopValue("you changed your email,submit or change email back to your old email")//value inside popup window
      setOpenModal(true)//instruction to open popup
       
     }
     else{
       navigate("/profile")
     }
  };
  

  return (
    <div>
       <Popup open={openModal} 
      onClose={() => setOpenModal(false)}
      value={popvalue}
      />
   <LoginUserNavBar/>
    <div className="profile-editing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          
          <div className="overlap-group">
            <div className="frame">
              <div className="div">
               
                  <button className="cancel-button-profile-edit" onClick={back}>back</button>
                
                <button
                  className="save-button-profile-edit"
                  onClick={saveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>

            <div className="general-info-photo">
              <div className="group">
                <div className="overlap-group-2">
                  <div className="profile-image-main">
                    <div className="profile-image-child-main" />
                    <div className="profile-image-item-main" />
                    <div className="name-firstChar-main">{user.firstName.charAt(0)}</div>
                  </div>
                  <div className="user-name-heading">
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>

            <div className="firstName-group1">
              <div className="firstName-group2">
                <div className="firstName-text">First name</div>
                <input
                  className="firstname-inputbox"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="lastname-group1">
              <div className="lastname-text">Last Name</div>
              <input
                className="lastname-inputbox"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="username-group1">
              <div className="username-text">Email</div>
              <input
                type="email"
                className="username-inputbox"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="email-group1">
              <div className="email-text">Phone Number</div>
              <input
                type="number"
                className="email-inputbox"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
              />
            </div>

           

            <div className="phone-group1">
              <div className="overlap-2">
                <div className="group-2">
                  <div className="phone-text">Location</div>
                  <input
                    type="text"
                    className="phone-inputbox"
                    name="location"
                  value={user.location}
                  onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Profile2;
