import React from "react";
import "./ToolsCSS/ToolsClick.css";

function SkillsBoard(props) {
  return (
    <div className="SkillsBoard">
      {props.skills.map((value, index) => {
        for (let key in value) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "rgb(49, 48, 54)",
                marginTop: "0.5vw",
              }}
              key={index}
            >
              <div style={{ width: "17vw", paddingLeft: "1vw" }} key={index}>
                {value[key]} : {key}
              </div>
              <button
                className="Delete"
                onClick={(e) => props.changeState(e, "skills", index)}
              >
                X
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillsBoard;
