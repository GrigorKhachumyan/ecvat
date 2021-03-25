import React from "react";
import "../tools.css";
import {Button} from 'reactstrap';


function EducationTools(props) {
  return (
    <div className="ToolsClick">
      <input
        value={props.eduqationInputs.eduPlace}
        className="Input1"
        placeholder="Name of school/ institution"
        onChange={(e) => props.changeState(e, "eduInputs", "eduPlace")}
      />
      <input
        value={props.eduqationInputs.eduProf}
        className="Input1"
        placeholder="Degree(s)"
        onChange={(e) => props.changeState(e, "eduInputs", "eduProf")}
      />
      <input
        value={props.eduqationInputs.eduStart}
        className="Input1"
        placeholder="Start date"
        onChange={(e) => props.changeState(e, "eduInputs", "eduStart")}
      />
      <input
        value={props.eduqationInputs.eduEnd}
        className="Input1"
        placeholder="Graduation date"
        onChange={(e) => props.changeState(e, "eduInputs", "eduEnd")}
      />
      <Button
        className="Button1"
        onClick={(e) => props.changeState(e, "education")}
      >
        Add education
      </Button>
    </div>
  );
}

export default EducationTools;
