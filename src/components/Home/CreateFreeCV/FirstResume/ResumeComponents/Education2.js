import React from "react";
import "./ResumeBody.css";

function Education2(props) {
  return (
    <div className="Education2">
      {props.education.map((value, index) => {
        return (
          <div key={index}>
            <div style={{ marginTop: "0.4vw" }}>{value.eduPlace}</div>
            <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>
              {value.eduProf}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education2;
