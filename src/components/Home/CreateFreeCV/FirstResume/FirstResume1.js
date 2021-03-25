import React,{forwardRef} from "react";
import "./Resume.css";
import NameProfContact1 from "./ResumeComponents/NameProfContact1";
import Education from "./ResumeComponents/Education";
import Experiance from "./ResumeComponents/Experiance";
import Languages from "./ResumeComponents/Languages";
import Skills from "./ResumeComponents/Skills";
import Objective from "./ResumeComponents/Objective";
import Photo from "./ResumeComponents/Photo";

const  Resume= forwardRef((props, ref) => {

    return (
      <div className="Resume" >
        <div className="ResumeBody1 ResumeBody">
          <div
            ref={ref}
            style={{
              width: "10vw",
              backgroundColor: "#d9d8dd",
            }}
          >
            <Photo photo={props.photo}/>
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
            <NameProfContact1
              name={props.name}
              surname={props.surname}
              profession={props.profession}
              adress={props.adress}
              phone={props.phone}
              mail={props.mail}
              birdthDate={props.birdthDate}
            />
            <div className="OuthlineWhite"></div>
            <div className="ExpDiv">EXPERIENCE</div>
            <Experiance experiance={props.experiance} />
            <div className="EduDiv">EDUCATION</div>
            <Education education={props.education} />
          </div>
        </div>
      </div>
    );
  }
)

export default Resume;
