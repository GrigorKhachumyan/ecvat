import React from "react";
import "./SecondResumeBody.css";

function NameSurnameSecond(props) {
  return (
    <div className="NameSurnameSecond">{props.name + "  " + props.surname}</div>
  );
}

export default NameSurnameSecond;
