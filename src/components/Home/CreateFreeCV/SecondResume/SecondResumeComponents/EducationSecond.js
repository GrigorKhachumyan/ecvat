import React from "react";
import "./SecondResumeBody.css";

function EducationSecond(props) {
  return (
    <div style={{ marginLeft: "1vw" }}>
      {props.education.map((value, index) => {
        return (
          <div key={index}>
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: "700",
                marginTop: "0.4vw",
              }}
            >
              {value.eduStart} - {value.eduEnd}
            </div>
            <div
              style={{
                marginLeft: "0.3vw",
                fontSize: "0.8vw",
                fontWeight: "600",
              }}
            >
              {value.eduPlace}
            </div>
            <div
              style={{
                marginLeft: "0.3vw",
                fontSize: "0.8vw",
                fontWeight: "600",
              }}
            >
              {value.eduProf}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationSecond;
