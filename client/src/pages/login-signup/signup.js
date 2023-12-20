import { useState } from "react";
import  LoggedOutUserNavBar from "../../componants/navbar/LoggedOutUserNavBar"
import image from "./images/Group 64.png";
import "./css/main.css";
import "./css/util.css";
import Backbutton from "../../componants/backBtn/Backbutton";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import Popup from '../../componants/popup/Popup';



function Signup() {
  const[firstName,setFirstName]=useState()
  const[lastName,setLastName]=useState()
  const[email,setEmail]=useState()
  const[phone,setphone]=useState()
  const[location,setLocation]=useState()
  const[password,setPassword]=useState()
  let[confrimPassword,setconfrimPassword]=useState()
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")


   
  
  const handleSubmit =(e) =>{
    if((password!=null)&&(firstName!=null)&&(lastName!=null)&&(email!=null)&&(location!=null)){
      if((password === confrimPassword)){
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{firstName,lastName,email,phone,location,password})
        .then(result => {console.log(result)
          navigate("/login");
          
        })
        .catch(err => console.log(err))
      }
      else{
        setpopValue("password not matching")//value inside popup window
        setOpenModal(true)
        e.preventDefault();
      }
  
  }
  else{
    setpopValue("insufficiant details")//value inside popup window
    setOpenModal(true)
    e.preventDefault();
    
  }
 
  }
  return (
    <div className="SignupMainDiv">
      <Popup open={openModal} 
      onClose={() => setOpenModal(false)}
      value={popvalue}
      />
     <LoggedOutUserNavBar/>
       <Backbutton/>
       <div className="limiter">
        
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt="">
        <img src={image} alt="IMG" />
      </div>
      <form className="signup-form validate-form" onSubmit={handleSubmit}>
        <span className="login100-form-title">Sign Up</span>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=> setphone(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            placeholder="location"
            value={location}
            onChange={(e)=> setLocation(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="password"
            value={confrimPassword}
            onChange={(e)=> setconfrimPassword(e.target.value)}
            placeholder="enter password again"
          />
        </div>
        <div className="container-login100-form-btn" >
        <button type="submit"  className="login100-form-btn">sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}

export default Signup;
