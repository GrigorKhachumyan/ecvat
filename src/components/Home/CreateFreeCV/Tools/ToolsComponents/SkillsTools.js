import React from "react";
import "../tools.css";
import {Button} from 'reactstrap';


function SkillsTools(props) {
  return (
    <div className="ToolsClick">
      <input
        value={props.skillInputs.skillsName}
        className="Input1"
        placeholder="Skill"
        onChange={(e) => props.changeState(e, "skillsInputs", "skillsName")}
      />
      <input
        value={props.skillInputs.skillsLVL}
        type="range"
        className="range"
        placeholder="Profiency level"
        onChange={(e) => props.changeState(e, "skillsInputs", "skillsLVL")}
      />
      <Button
        className="Button1"
        onClick={(e) => props.changeState(e, "skills")}
      >
        Add skills
      </Button>
    </div>
  );
}

export default SkillsTools;
