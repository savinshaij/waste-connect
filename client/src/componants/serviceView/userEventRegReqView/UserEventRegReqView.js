import React from "react";
import "./UserEventRegReqView.css";
import { useEffect } from "react";
import axios from "axios";

const UserEventRegReqView = ( {event, handleCancel } ) => {
   
  const handleEventCancellation = () => {
    // Make a DELETE request to the server to cancel the event
    axios
    .delete(`http://localhost:3001/registered-event/${event._id}`)
      .then((response) => {
        if (response.status === 200) {
          // Call the handleCancel callback to remove the event from UI
          handleCancel(event);
        }
      })
      .catch((error) => {
        console.error("Error canceling the event:", error);
      });
  };
    
  return (
    <div className="UserEventRegReqView-box">
      <div className="UserEventRegReqView-group">
        <div className="UserEventRegReqView-div">
          <div className="UserEventRegReqView-overlap-group-wrapper">
            <div className="UserEventRegReqView-overlap-group">
              <div className="UserEventRegReqView-header">
                <div className="UserEventRegReqView-registereddate">
                  registered date:{event.currentDate}
                </div>
                <div className="UserEventRegReqView-eventdate">event date:{event.eventDate}</div>
                <div className="UserEventRegReqView-eventname">{event.eventDate}</div>
              </div>
            </div>
          </div>
          <div className="UserEventRegReqView-group-2">
            <div className="UserEventRegReqView-serviceDetails">

            {event.details}
            </div>
            <div className="UserEventRegReqView-text-wrapper-4">
              event deatils:
            </div>
          </div>
          <div className="UserEventRegReqView-group-3">
            <div className="UserEventRegReqView-div-wrapper">
              <button className="UserEventRegReqView-overlap-group-2" onClick={handleEventCancellation}>
                cancel
              </button>
            </div>
            <div className="UserEventRegReqView-text-wrapper-6">location:{event.location}</div>
            <div className="UserEventRegReqView-group-4">
              <div className="UserEventRegReqView-text-wrapper-7">
                approvel sts
              </div>
              <div className="UserEventRegReqView-ellipse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEventRegReqView;
