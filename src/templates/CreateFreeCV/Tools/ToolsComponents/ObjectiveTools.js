import React from "react";
import "./ToolsCSS/ToolsClick.css";

function ObjectiveTools(props) {
  return (
    <div className="ToolsClick">
      <textarea
        className="Input1"
        placeholder="...Objective"
        onChange={(e) => {
          props.changeState(e, "contact", "objective");
        }}
      />
    </div>
  );
}

export default ObjectiveTools;
