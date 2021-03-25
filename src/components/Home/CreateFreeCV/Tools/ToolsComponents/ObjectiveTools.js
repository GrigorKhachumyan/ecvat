import React from "react";
import "../tools.css";

function ObjectiveTools(props) {
  return (
    <div className="ToolsClick">
      <textarea
        value={props.contactInputs.objective}
        className="Input1"
        placeholder="Objective"
        onChange={(e) => {
          props.changeState(e, "contact", "objective");
        }}
      />
    </div>
  );
}

export default ObjectiveTools;
