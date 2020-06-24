import React from "react";
import "./ToolsCSS/ToolsClick.css";

function SkillsTools(props) {
  return (
    <div className="ToolsClick">
      <input
        className="Input1"
        placeholder="...Skill_Name"
        onChange={(e) => props.changeState(e, "skillsInputs", "skillsName")}
      />
      <input
        type="range"
        className="Input1"
        placeholder="...Skill_LVL"
        onChange={(e) => props.changeState(e, "skillsInputs", "skillsLVL")}
      />
      <button
        className="Button1"
        onClick={(e) => props.changeState(e, "skills")}
      >
        Add skills
      </button>
    </div>
  );
}

export default SkillsTools;
