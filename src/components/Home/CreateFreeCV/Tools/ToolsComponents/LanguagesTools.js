import React from "react";
import "../tools.css";
import {Button} from 'reactstrap';


function LanguagesTools(props) {
  return (
    <div className="ToolsClick">
      <input
        value={props.languageInputs.langName}
        className="Input1"
        placeholder="Language"
        onChange={(e) => props.changeState(e, "langInputs", "langName")}
      />
      <input
        value={props.languageInputs.langLVL}
        type="range"
        className="range"
        placeholder="Profiency level"
        onChange={(e) => props.changeState(e, "langInputs", "langLVL")}
      />
      <Button
        className="Button1"
        onClick={(e) => props.changeState(e, "languages")}
      >
        Add Language
      </Button>
    </div>
  );
}

export default LanguagesTools;
