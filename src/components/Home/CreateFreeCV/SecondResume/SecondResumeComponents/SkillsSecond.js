import React from "react";
import "./SecondResumeBody.css";

function SkillsSecond(props) {
  return (
    <div className="SkillsSecond">
      {props.skills.map((value, index) => {
        for (let key in value) {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0.8vw",
                marginLeft: "0.8vw",
              }}
            >
              <div
                style={{
                  marginBottom: "0.4vw",
                  width: "1vw",
                  height: "8vw",
                  backgroundColor: "rgb(145, 30, 30)",
                }}
              >
                <div
                  style={{
                    width: "1vw",
                    height: `${100 - value[key]}%`,
                    backgroundColor: "#f1f1f3",
                  }}
                ></div>
              </div>
              <div style={{ fontSize: "1vw", fontWeight: "700" }}> {key} </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillsSecond;
