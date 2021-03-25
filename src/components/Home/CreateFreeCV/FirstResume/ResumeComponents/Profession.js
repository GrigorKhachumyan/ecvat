import React from "react";
import "./ResumeBody.css";

function Profession(props) {
  return (
    <div
      style={{
        marginTop: "0.77vw",
        display: "inline-block",
        backgroundColor: "#d9d8dd",
        height: "1.5vw",
        width: "15.8vw",
      }}
    >
      <div className="Profession">{props.profession}</div>{" "}
    </div>
  );
}

export default Profession;
