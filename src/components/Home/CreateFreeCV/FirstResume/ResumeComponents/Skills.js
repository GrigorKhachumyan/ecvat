import React from "react";
import "./ResumeBody.css";

function Skills(props) {
  return (
    <div className="Skills">
      {props.skills.map((value, index) => {
        for (let key in value) {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <div> {key} </div>
              <div
                style={{
                  marginLeft: "0.5vw",
                  marginTop: "0.4vw",
                  marginBottom: "0.4vw",
                  width: "2.5vw",
                  height: "0.4vw",
                  backgroundColor: "#f1f1f3",
                }}
              >
                <div
                  style={{
                    width: `${value[key]}%`,
                    height: "0.4vw",
                    backgroundColor: "#313036",
                  }}
                ></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Skills;
