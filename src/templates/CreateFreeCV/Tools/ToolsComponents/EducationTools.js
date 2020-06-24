import React from "react";
import "./ToolsCSS/ToolsClick.css";

function EducationTools(props) {
  return (
    <div className="ToolsClick">
      <input
        className="Input1"
        placeholder="...eduPlace"
        onChange={(e) => props.changeState(e, "eduInputs", "eduPlace")}
      />
      <input
        className="Input1"
        placeholder="...eduProf"
        onChange={(e) => props.changeState(e, "eduInputs", "eduProf")}
      />
      <input
        className="Input1"
        placeholder="...eduStart"
        onChange={(e) => props.changeState(e, "eduInputs", "eduStart")}
      />
      <input
        className="Input1"
        placeholder="...eduEnd"
        onChange={(e) => props.changeState(e, "eduInputs", "eduEnd")}
      />
      <button
        className="Button1"
        onClick={(e) => props.changeState(e, "education")}
      >
        Add education
      </button>
    </div>
  );
}

export default EducationTools;
