import React from "react";
import "../tools.css";
import {Button} from 'reactstrap';

function ExperianceTools(props) {
  return (
    <div className="ToolsClick">
      <input
        value={props.experianceInputs.expPlace}
        className="Input1"
        placeholder="Company"
        onChange={(e) => props.changeState(e, "expInputs", "expPlace")}
      />
      <input
        value={props.experianceInputs.expProf}
        className="Input1"
        placeholder="Title/position"
        onChange={(e) => props.changeState(e, "expInputs", "expProf")}
      />
      <input
        value={props.experianceInputs.expStart}
        className="Input1"
        placeholder="Start date"
        onChange={(e) => props.changeState(e, "expInputs", "expStart")}
      />
      <input
        value={props.experianceInputs.expEnd}
        className="Input1"
        placeholder="End date"
        onChange={(e) => props.changeState(e, "expInputs", "expEnd")}
      />
      <textarea
        value={props.experianceInputs.expDescription}
        className="Input1"
        placeholder="Description"
        onChange={(e) => props.changeState(e, "expInputs", "expDescription")}
      />
      <Button
        className="Button1"
        onClick={(e) => props.changeState(e, "experiance")}
      >
        Add experiance
      </Button>
    </div>
  );
}

export default ExperianceTools;
