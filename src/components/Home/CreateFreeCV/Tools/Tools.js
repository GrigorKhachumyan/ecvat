import React from "react";
import "./tools.css";
import ContactTools from "./ToolsComponents/ContactTools";
import EducationTools from "./ToolsComponents/EducationTools";
import EducationBoard from "./ToolsComponents/EducationBoard";
import ExperianceTools from "./ToolsComponents/ExperianceTools";
import ExperianceBoard from "./ToolsComponents/ExperianceBoard";
import LanguagesTools from "./ToolsComponents/LanguagesTools";
import LanguagesBoard from "./ToolsComponents/LanguagesBoard";
import SkillsTools from "./ToolsComponents/SkillsTools";
import SkillsBoard from "./ToolsComponents/SkillsBoard";
import ObjectiveTools from "./ToolsComponents/ObjectiveTools";
import PhotoTools from "./ToolsComponents/PhotoTools";


function Tools(props) {
  function changePhoto (photo){    
    props.changePhoto(photo);
  }
  return (
    <div className="Tools">
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "ContactTools", 0)}
        >
          Contacts
        </div>
        {props.clickedTools === "ContactTools" && (
          <ContactTools
            contactInputs={props.contactInputs}
            changeState={props.changeState}
          />
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "EducationTools", 0)}
        >
          Education
        </div>
        {props.clickedTools === "EducationTools" && (
          <div>
            <EducationTools
              eduqationInputs={props.eduqationInputs}
              changeState={props.changeState}
            />
            <EducationBoard
              changeState={props.changeState}
              education={props.education}
            />
          </div>
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "ExperianceTools", 0)}
        >
          Experience
        </div>
        {props.clickedTools === "ExperianceTools" && (
          <div>
            <ExperianceTools
              experianceInputs={props.experianceInputs}
              changeState={props.changeState}
            />
            <ExperianceBoard
              changeState={props.changeState}
              experiance={props.experiance}
            />
          </div>
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "LanguagesTools", 0)}
        >
          Languages
        </div>
        {props.clickedTools === "LanguagesTools" && (
          <div>
            <LanguagesTools
              languageInputs={props.languageInputs}
              changeState={props.changeState}
            />
            <LanguagesBoard
              languages={props.languages}
              changeState={props.changeState}
            />
          </div>
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "SkillsTools", 0)}
        >
          Skills
        </div>
        {props.clickedTools === "SkillsTools" && (
          <div>
            <SkillsTools
              skillInputs={props.skillInputs}
              changeState={props.changeState}
            />
            <SkillsBoard
              skills={props.skills}
              changeState={props.changeState}
            />
          </div>
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "ObjectiveTools", 0)}
        >
          Objective
        </div>
        {props.clickedTools === "ObjectiveTools" && (
          <ObjectiveTools
            contactInputs={props.contactInputs}
            changeState={props.changeState}
          />
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "PhotoTools", 0)}
        >
          Upload photo
        </div>
        {props.clickedTools === "PhotoTools" && <PhotoTools changePhoto={changePhoto}/>}
      </div>
    </div>
  );
}

export default Tools;
