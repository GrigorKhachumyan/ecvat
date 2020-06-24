import React from "react";
import "./Tools.css";
import "./ToolsComponents/ToolsCSS/ToolsName.css";
import "./ToolsComponents/ToolsCSS/ToolsClick.css";
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
  return (
    <div className="Tools">
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "ContactTools", 0)}
        >
          CONTACT
        </div>
        {props.clickedTools === "ContactTools" && (
          <ContactTools changeState={props.changeState} />
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "EducationTools", 0)}
        >
          EDUCATION
        </div>
        {props.clickedTools === "EducationTools" && (
          <div>
            <EducationTools changeState={props.changeState} />
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
          EXPERIENCE
        </div>
        {props.clickedTools === "ExperianceTools" && (
          <div>
            <ExperianceTools changeState={props.changeState} />
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
          LANGUAGES
        </div>
        {props.clickedTools === "LanguagesTools" && (
          <div>
            <LanguagesTools changeState={props.changeState} />
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
          SKILLS
        </div>
        {props.clickedTools === "SkillsTools" && (
          <div>
            <SkillsTools changeState={props.changeState} />
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
          OBJECTIVE
        </div>
        {props.clickedTools === "ObjectiveTools" && (
          <ObjectiveTools changeState={props.changeState} />
        )}
      </div>
      <div>
        <div
          className="ToolsName"
          onClick={(e) => props.changeState(e, "clicked", "PhotoTools", 0)}
        >
          PHOTO
        </div>
        {props.clickedTools === "PhotoTools" && <PhotoTools />}
      </div>
    </div>
  );
}

export default Tools;
