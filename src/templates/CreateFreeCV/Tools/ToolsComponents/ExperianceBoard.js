import React from "react";
import "./ToolsCSS/ToolsClick.css";

function ExperianceBoard(props) {
  return (
    <div className="ExperianceBoard">
      {props.experiance.map((value, index) => {
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
            <div style={{ width: "17vw", paddingLeft: "1vw" }}>
              <div>
                {value.expStart} - {value.expEnd}
              </div>
              <div>
                {value.expPlace} : {value.expProf}
              </div>
            </div>
            <button
              className="Delete"
              onClick={(e) => props.changeState(e, "experiance", index)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ExperianceBoard;
