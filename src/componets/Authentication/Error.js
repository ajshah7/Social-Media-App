import React from "react";
import "./Error.css";
const Error = ({error}) => {
  return (
   
        <div className="incorrect-password">{error}</div>
     
  );
};


export default Error;