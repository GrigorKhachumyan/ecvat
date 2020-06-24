import React from "react";
import "./ToolsCSS/ToolsClick.css";

function EducationBoard(props) {
  return (
    <div className="EducationBoard">
      {props.education.map((value, index) => {
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
                {value.eduStart} - {value.eduEnd}
              </div>
              <div>
                {value.eduPlace} : {value.eduProf}
              </div>
            </div>
            <button
              className="Delete"
              onClick={(e) => props.changeState(e, "education", index)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EducationBoard;
