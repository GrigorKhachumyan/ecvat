import React from "react";
import "./ResumeBody.css";

function Education(props) {
  return (
    <div className="Education">
      {props.education.map((value, index) => {
        return (
          <div key={index}>
            <div style={{ marginTop: "0.6vw" }}>
              {value.eduPlace} : {value.eduStart} - {value.eduEnd}
            </div>
            <div style={{ fontSize: "1vw", fontWeight: "600" }}>
              {value.eduProf}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
