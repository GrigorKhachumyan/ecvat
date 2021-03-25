import React,{forwardRef} from "react";
import "./Resume.css";
import NameProfContact2 from "./ResumeComponents/NameProfContact2";
import Education from "./ResumeComponents/Education";
import Experiance from "./ResumeComponents/Experiance";
import Languages from "./ResumeComponents/Languages";
import Skills from "./ResumeComponents/Skills";
import Objective from "./ResumeComponents/Objective";

const  Resume= forwardRef((props, ref) => {
  return (
    <div className="test">
    <div className="Resume" ref={ref}>
      <div className="ResumeBody2 ResumeBody" >
        <NameProfContact2
          name={props.name}
          surname={props.surname}
          profession={props.profession}
          adress={props.adress}
          phone={props.phone}
          mail={props.mail}
          birdthDate={props.birdthDate}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "10vw",
              backgroundColor: "#d9d8dd",
            }}
          >
            <div className="OutlineBlack"></div>
            <div className="ProfileDiv">PROFILE</div>
            <Objective objective={props.objective} />
            <div className="LangDiv">LANGUAGES</div>
            <div className="Outline"></div>
            <Languages languages={props.languages} />
            <div className="SkillsDiv">SKILLS</div>
            <div className="Outline"></div>
            <Skills skills={props.skills} />
          </div>
          <div
            style={{
              width: "19.7vw",
              backgroundColor: "#f1f1f3",
            }}
          >
            <div className="ExpDiv">EXPERIENCE</div>
            <Experiance experiance={props.experiance} />
            <div className="EduDiv">EDUCATION</div>
            <Education education={props.education} />
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default Resume;
