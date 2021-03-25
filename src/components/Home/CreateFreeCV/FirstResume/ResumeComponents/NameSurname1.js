import React from "react";
import "./ResumeBody.css";

function NameSurname1(props) {
  return (
    <div>
      <div className="NameSurname1">{props.name}</div>
      <div className="NameSurname1">{props.surname}</div>
    </div>
  );
}

export default NameSurname1;
