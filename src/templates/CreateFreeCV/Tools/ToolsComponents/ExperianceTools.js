import React from "react";
import "./ToolsCSS/ToolsClick.css";

function ExperianceTools(props) {
  return (
    <div className="ToolsClick">
      <input
        className="Input1"
        placeholder="...expPlace"
        onChange={(e) => props.changeState(e, "expInputs", "expPlace")}
      />
      <input
        className="Input1"
        placeholder="...expProf"
        onChange={(e) => props.changeState(e, "expInputs", "expProf")}
      />
      <input
        className="Input1"
        placeholder="...expStart"
        onChange={(e) => props.changeState(e, "expInputs", "expStart")}
      />
      <input
        className="Input1"
        placeholder="...expEnd"
        onChange={(e) => props.changeState(e, "expInputs", "expEnd")}
      />
      <textarea
        className="Input1"
        placeholder="...expDescription"
        onChange={(e) => props.changeState(e, "expInputs", "expDescription")}
      />
      <button
        className="Button1"
        onClick={(e) => props.changeState(e, "experiance")}
      >
        Add experiance
      </button>
    </div>
  );
}

export default ExperianceTools;
