import { useCallback, useEffect, useState } from "react";
import "./EventReg.css";
import eventRegimg from "./imagee.svg";
import { Link } from "react-router-dom";
import LoginUserNavBar from "../../componants/navbar/LoginUserNavBar";
import axios from "axios";
import Popup from '../../componants/popup/Popup';


const EventsReg = () => {
  const today = new Date();
  const [openModal, setOpenModal] = useState(false);
  const [popvalue,setpopValue]=useState ("")
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const time = today.toLocaleTimeString();
const CurrentDate = month + "/" + date + "/" + year + "   Time:" + time;
  const [formData, setFormData] = useState({
    email: "", // Add email field to match the schema
    events: {
      name: "",
      serviceName: "",
      period: "",
      phone: "",
      collectorCount: "", 
      currentDate: "",
      eventDate: "",
      location:"", 
      details: "",
    },
  });
const clearFtn=()=>{
  setFormData({
    email: "",
    events: {
      name: "",
      serviceName: "",
      period: "",
      phone: "",
      collectorCount: "",
      currentDate: "",
      eventDate: "",
      location:"", 
      details: "",
    },
  });
}

  useEffect(() => {
    // Fetch user data from the server and update the state
    axios
      .get("http://localhost:3001/event")
      .then((response) => {
        setFormData({
          ...formData, // Spread the existing formData to avoid overwriting other fields
          email: response.data.email // Set the new value for the "email" field
        });
        
        
      })
      .catch((err) => console.log(err));
  }, []);


  const handleSubmit = async (e) => {

    e.preventDefault();
    setFormData({
      ...formData, // Spread the existing formData to avoid overwriting other fields
      events: {
        ...formData.events, // Spread the existing events object
        currentDate: CurrentDate // Set the new value for the "currentDate" field
      }
    });
    if (formData.events.name !== "" && formData.events.serviceName !== "" &&formData.events.period !== "" &&formData.events.phone !== "" &&formData.events.collectorCount !== "" && formData.events.eventDate !== "" &&formData.events.location !== "" &&formData.events.details!== "" ) {
   
  
    try {
      const response = await axios.post('http://localhost:3001/event', formData);
      if(response.data){
        setpopValue("event registration success")//value inside popup window
        setOpenModal(true)
        setFormData({
          email: "",
          events: {
            name: "",
            serviceName: "",
            period: "",
            phone: "",
            collectorCount: "",
            currentDate: "",
            eventDate: "",
            location:"", 
            details: "",
          },
        });
      
      }
    } catch (error) {
      console.error("Error while registering the event: ", error);
      // Handle the error, show an alert, or perform other actions
    }
  }
  else{

    setpopValue("please ,enter all the details")//value inside popup window
        setOpenModal(true)
  }
  ;}

  
  
  
  
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      events: {
        ...formData.events,
        [name]: value,
      },
    });
  };

  return (
    <div className="events-reg">
       <Popup open={openModal} 
      onClose={() => setOpenModal(false)}
      value={popvalue}
      />
      <LoginUserNavBar />
      <div className="main">
        <div className="left-grp">
          <div className="event-buttons-grp">
            <Link to="/registered-event">
              <button className="eventregedbtn">Registered events</button>
            </Link>
            <Link>
              <button className="eventregbtn">Event registration</button>
            </Link>
          </div>
          <img className="imagee-icon" alt="" src={eventRegimg} />
        </div>
        <div className="right-grp">
          <form onSubmit={handleSubmit}>
            <div className="right-grp-child" />
            <div className="cancelandsave-grp">
              <button className="cancelbtn" id="clear" onClick={clearFtn}>
                clear
              </button>
              <button className="save-button" type="submit" id="submit">
                submit
              </button>
            </div>
            <div className="service-details-grp">
              <div className="service-details-grp-input">
                <textarea
                  className="service-details-grp-input-child"
                  name="details"
                  value={formData.events.details}
                  onChange={handleChange}
                />
                <label className="eventReg-label">Service Details</label>
              </div>
            </div>
            <div className="noofcollecter-grp">
              <div className="noofcollecter-input">
                <label className="eventReg-label">number of collector needed</label>
                <input
                  className="event-p-group-input"
               
                  name="collectorCount"
                  value={formData.events.collectorCount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="phone-grp">
              <label className="eventReg-label">phone number</label>
              <input
                className="event-p-group-input"
                type="text"
                name="phone"
                value={formData.events.phone}
                onChange={handleChange}
              />
            </div>
            <div className="event-p-group">
              <label className="eventReg-label">event period in days</label>
              <input
                className="event-p-group-input"
                type="text"
                name="period"
                value={formData.events.period}
                onChange={handleChange}
              />
            </div>
            <div className="location-grp">
              <label className="eventReg-label">Location</label>
              <input
                className="event-p-group-input"
                type="text"
                name="location" // Assuming location field is in the schema
                value={formData.events.location}
                onChange={handleChange}
              />
            </div>
            <div className="date-grp">
              <div className="date-input">
                <input
                  className="event-p-group-input"
                  type="text"
                  name="eventDate"
                  value={formData.events.eventDate}
                  onChange={handleChange}
                />
                <label className="eventReg-label">Date</label>
              </div>
            </div>
            <div className="servicename-grp">
              <label className="eventReg-label">service name</label>
              <input
                className="event-p-group-input"
                type="text"
                name="serviceName"
                value={formData.events.serviceName}
                onChange={handleChange}
              />
            </div>
            <div className="name-group">
              <label className="name">Name</label>
              <input
                className="name-input"
                type="text"
                name="name"
                value={formData.events.name}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsReg;
