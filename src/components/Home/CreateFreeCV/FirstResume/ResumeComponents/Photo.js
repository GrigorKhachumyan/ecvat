import React from "react";
import "./ResumeBody.css";

function Photo(props) {
  return <div className="PhotoBody" style={{backgroundImage: `url(${props.photo})`}} ></div>;
}

export default Photo;
