import React from "react";
import "./ResumeBody.css";

function NameSurname2(props) {
  return (
    <div style={{textAlign: "center"}}>
      <div className="NameSurname2">{props.name + "  " + props.surname}</div>
    </div>
  );
}

export default NameSurname2;
