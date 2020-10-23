import React from "react";
import "./Error.css";
const Error = ({ error, type }) => {
  return <div className={type}>{error}</div>;
};

export default Error;
