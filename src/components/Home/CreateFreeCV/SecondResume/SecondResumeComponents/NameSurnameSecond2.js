import React from "react";
import "./SecondResumeBody.css";

function NameSurnameSecond2(props) {
  return (
    <div style={{ width: "20vw", marginTop: "1vw" }}>
      <div className="NameSurnameSecond2">{props.name}</div>
      <div className="NameSurnameSecond2">{props.surname}</div>
    </div>
  );
}

export default NameSurnameSecond2;
