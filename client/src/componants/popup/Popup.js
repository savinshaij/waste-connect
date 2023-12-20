import React from 'react';
import './Popup.css'

const Modal = ({ open, onClose,value }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
       
        <div className='modalRight'>
         
          <div className='content'>
           <h3 className='poptext'>{value}</h3>
          </div>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;