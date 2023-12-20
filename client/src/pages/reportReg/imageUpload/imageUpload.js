import React from "react";
import ReactDOM from "react-dom";
import UploadComponent from "./upload";
import { useCallback, useEffect, useState } from "react";

import "./imageUpload.css";

const ImageUpload = () => {
    const [upload, setUpload] = useState({
      pictures: [],
      maxFileSize: 5242880,
      imgExtension: [".jpg", ".png"],
      defaultImages: []
    });
  
    const handleChange = (files) => {
      setUpload((prevUpload) => ({
        ...prevUpload,
        pictures: [...prevUpload.pictures, ...files]
      }));
    };
  
    const confirmUpload = () => {
      const { pictures } = upload;
      console.warn("Confirm Upload =>", [...pictures]);
    };
  
    return (
      <div className="imageUpload-main">
        
         
       { /*  <button onClick={confirmUpload}>Confirm upload</button> */}
      
        <UploadComponent {...upload} handleChange={handleChange} />
      </div>
    );
  };
  

  export default ImageUpload;