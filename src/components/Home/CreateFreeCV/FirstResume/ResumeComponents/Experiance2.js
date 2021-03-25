import React from "react";
import "./ResumeBody.css";

function Experiance2(props) {
  return (
    <div className="Experiance">
      {props.experiance.map((value, index) => {
        return (
          <div key={index}>
            <div style={{ marginTop: "0.6vw" }}>
              {value.expPlace} : {value.expStart} - {value.expEnd}
            </div>
            <div style={{ fontSize: "1vw", fontWeight: "600" }}>
              {value.expProf}
            </div>
            <div style={{ fontSize: "0.6vw" }}>{value.expDescription}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Experiance2;
