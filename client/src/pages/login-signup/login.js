import React from "react";
import { useState } from "react";
import  LoggedOutUserNavBar from "../../componants/navbar/LoggedOutUserNavBar"
import image from "./images/img-01.png";
import "./css/main.css";
import "./css/util.css";
import Backbutton from "../../componants/backBtn/Backbutton";
import axios from "axios";
import Popup from '../../componants/popup/Popup';
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const handleSubmit = (e) => {
    if (password != null && email != null) {
      e.preventDefault();
      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          if (result.data !== "incorrect-password" && result.data !== "user-not-found") {
           //props.loginSts(true);//upliffting
           //console.log(result.data)
           if (result.data.email === "wasteconnect.admin@gmail.com" && result.data.password === "680586"){
            navigate("/Ahome");
           }
           else{
            navigate("/home");
           }
            
            
          } else {
            setpopValue(result.data)//value inside popup window
            setOpenModal(true)
          }
        })
        .catch((err) => console.log(err));
    } else {
      setpopValue("email and password needed")//value inside popup window
      setOpenModal(true)//instruction to open popup
      
     
      e.preventDefault();
    }
  };
  return (
    <div className="loginMainDiv">
      <Popup open={openModal} 
      onClose={() => setOpenModal(false)}
      value={popvalue}
      />
     <LoggedOutUserNavBar/>
      <Backbutton />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt="">
              <img src={image} alt="IMG" />
            </div>
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title">Login</span>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
