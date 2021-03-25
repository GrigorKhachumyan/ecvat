import React from "react";
import "./SecondResumeBody.css";

function PhotoSecond(props) {
  return <div className="PhotoBodySecond" style={{backgroundImage:`url(${props.photo})`}}></div>;
}

export default PhotoSecond;
