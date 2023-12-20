import React from 'react';
import './AuthoiryEventRegView.css'

const AuthoiryEventRegView = ({ open, onClose,value }) => {
    
        return (
            <div className="UserEventRegReqView-box">
                <div className="UserEventRegReqView-main-border">
                    <div className="UserEventRegReqView-contents">
                        <div className="UserEventRegReqView-overlap">
                            <div className="UserEventRegReqView-right-content">
                                <div className="UserEventRegReqView-text-wrapper">no of collector</div>
                                <div className="UserEventRegReqView-div">no of days</div>
                                <button className="UserEventRegReqView-cancalbtn">
                                    <div className="UserEventRegReqView-overlap-group">
                                        <div className="UserEventRegReqView-text-wrapper-2">cancel</div>
                                    </div>
                                </button>
                                <div className="UserEventRegReqView-approve-btn">
                                    <div className="UserEventRegReqView-div-wrapper">
                                        <div className="UserEventRegReqView-text-wrapper-3">approve</div>
                                    </div>
                                </div>
                            </div>
                            <div className="UserEventRegReqView-left-content">
                                <div className="UserEventRegReqView-text-wrapper-4">registatrion date:</div>
                                <div className="UserEventRegReqView-text-wrapper-5">email:</div>
                                <div className="UserEventRegReqView-text-wrapper-6">event date</div>
                                <div className="UserEventRegReqView-text-wrapper-7">event name:</div>
                                <div className="UserEventRegReqView-text-wrapper-8">phone:</div>
                                <div className="UserEventRegReqView-text-wrapper-9">event deatils:</div>
                                <div className="UserEventRegReqView-rectangle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
  
 


export default AuthoiryEventRegView;