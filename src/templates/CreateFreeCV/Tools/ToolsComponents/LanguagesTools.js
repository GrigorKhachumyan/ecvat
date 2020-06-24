import React from "react";
import "./ToolsCSS/ToolsClick.css";

function LanguagesTools(props) {
  return (
    <div className="ToolsClick">
      <input
        className="Input1"
        placeholder="...Language_Name"
        onChange={(e) => props.changeState(e, "langInputs", "langName")}
      />
      <input
        type="range"
        className="Input1"
        placeholder="...Language_LVL"
        onChange={(e) => props.changeState(e, "langInputs", "langLVL")}
      />
      <button
        className="Button1"
        onClick={(e) => props.changeState(e, "languages")}
      >
        Add Lang
      </button>
    </div>
  );
}

export default LanguagesTools;
