import React from "react";
import "./SecondResumeBody.css";

function ProfessionSecond(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="ProfessionSecond">{props.profession}</div>
    </div>
  );
}

export default ProfessionSecond;
