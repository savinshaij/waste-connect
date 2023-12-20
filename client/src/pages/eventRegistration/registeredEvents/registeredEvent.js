import { useCallback, useEffect ,useState} from "react";
import "./EventReged.css";
import eventRegimg from "../imagee.svg";
import {Link} from "react-router-dom";
import LoginUserNavBar from "../../../componants/navbar/LoginUserNavBar"
import "../../../componants/serviceView/userEventRegReqView/UserEventRegReqView.css"
import axios from "axios";
const EventsReged = () => {
  const [events, setEvents] = useState([]);
  const [isEmpty,setIsEmpty] =useState(false)

  const handleDelete = async (post) => {
    setEvents(events.filter((p) => p._id !== post._id));
   
   
   
   
    axios.delete(`http://localhost:3001/registered-event/${post._id}`)
    .then(response => {
      // Handle success
     // if(events.length === 1){ setIsEmpty(true)}else{setIsEmpty(false)}
      
      console.log('Event deleted successfully');
    })
    .catch(error => {
      // Handle error
      console.error('Error deleting the event:', error);
    });
  };

  useEffect(() => {
    
    // Make an API request to fetch events from the server
    axios.get('http://localhost:3001/registered-event')
      .then((response) => {
           setEvents(response.data)
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
      
  }, []);
  useEffect(() => {
       if(events.length == 0){
        console.log(events.length+"if")
          setIsEmpty(true)}
          else if(events.length === 41){
            setIsEmpty(true)
          }
          else{setIsEmpty(false)
            console.log(events.length+"else")
          }
    
      
  }, [events]);
  return (
    <div className="events-reg">
     <LoginUserNavBar/>
      <div className="main">
        <div className="left-grp">
          <div className="event-buttons-grp-">
            <button className="eventregedbtn-" >Registered events  </button>
            <Link to="/event"> <button className="eventregbtn-" >Event registraction </button></Link>
            
          </div>
          <img className="imagee-icon" alt="" src={eventRegimg} />
        </div>
        <div className="right-grp">
          <div className="right-grp-child-registeredEvent" >
          {isEmpty ? (
            <p>No registered events to display.</p>
            
          ) : (
          
events.map((events, index) => (
  <div className="UserEventRegReqView-box">
  <div className="UserEventRegReqView-group">
    <div className="UserEventRegReqView-div">
      <div className="UserEventRegReqView-overlap-group-wrapper">
        <div className="UserEventRegReqView-overlap-group">
          <div className="UserEventRegReqView-header">
            <div className="UserEventRegReqView-registereddate">
              registered date:{events.currentDate}
            </div>
            <div className="UserEventRegReqView-eventdate">event date:{events.eventDate}</div>
            <div className="UserEventRegReqView-eventname">{events.eventDate}</div>
          </div>
        </div>
      </div>
      <div className="UserEventRegReqView-group-2">
        <div className="UserEventRegReqView-serviceDetails">

        {events.details}
        </div>
        <div className="UserEventRegReqView-text-wrapper-4">
          event deatils:
        </div>
      </div>
      <div className="UserEventRegReqView-group-3">
        <div className="UserEventRegReqView-div-wrapper">
          <button className="UserEventRegReqView-overlap-group-2"onClick={() => handleDelete(events)}>
            cancel
          </button>
        </div>
        <div className="UserEventRegReqView-text-wrapper-6">location:{events.location}</div>
        <div className="UserEventRegReqView-group-4">
          <div className="UserEventRegReqView-text-wrapper-7">
            approvel sts
          </div>
          <div className="UserEventRegReqView-ellipse" />
        </div>
      </div>
    </div>
  </div>
</div>)))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsReged;
