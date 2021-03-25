import React from "react";
import "./SecondResumeBody.css";

function ExperianceSecond(props) {
  return (
    <div className="ExperianceSecond">
      {props.experiance.map((value, index) => {
        return (
          <div key={index} style={{ marginLeft: "1vw", marginTop: "1vw" }}>
            <div
              style={{
                fontSize: "0.8vw",
                fontWeight: "600",
              }}
            >
              {value.expPlace} : {value.expStart} - {value.expEnd}
            </div>
            <div style={{ fontSize: "1vw", fontWeight: "700" }}>
              {value.expProf}
            </div>
            <div style={{ fontSize: "0.6vw", marginRight: "3vw" }}>
              {value.expDescription}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExperianceSecond;
