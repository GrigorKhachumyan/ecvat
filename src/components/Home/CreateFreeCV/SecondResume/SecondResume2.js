import React,{forwardRef} from "react";
import "./SecondResume.css";
import NameProfContactSecond from "./SecondResumeComponents/NameProfContactSecond";
import NameProfContactSecond2 from "./SecondResumeComponents/NameProfContactSecond2";
import EducationSecond from "./SecondResumeComponents/EducationSecond";
import ExperianceSecond from "./SecondResumeComponents/ExperianceSecond";
import LanguagesSecond from "./SecondResumeComponents/LanguagesSecond";
import SkillsSecond from "./SecondResumeComponents/SkillsSecond";
import ObjectiveSecond from "./SecondResumeComponents/ObjectiveSecond";

const  Resume= forwardRef((props, ref) => {
  return (
    /*<div className="test" >*/
    <div className="SecondResumeBody ResumeBody" ref={ref} >
      <div
        style={{ backgroundColor: "rgb(145, 30, 30)", height: "6vw" }}
      ></div>
      <NameProfContactSecond2 photo={props.photo}
        name={props.name}
        surname={props.surname}
        profession={props.profession}
        adress={props.adress}
        phone={props.phone}
        mail={props.mail}
        birdthDate={props.birdthDate}
      />
      <hr style={{ marginRight: "1.5vw", marginLeft: "1.5vw" }} />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "22.2vw",
            paddingLeft: "3vw",
            display: "flex",
            alignItems: "center",
            marginRight: "3vw",
            borderColor: "black",
            borderRight: "groove",
          }}
        >
          <div>
            <div className="TitleDiv">EXPERIENCE</div>
            <ExperianceSecond experiance={props.experiance} />
            <div className="TitleDiv">SKILLS</div>
            <SkillsSecond skills={props.skills} />
          </div>
        </div>

        <div
          style={{
            width: "17vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5vw",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div>
              <div className="TitleDiv">ABOUTE ME</div>
              <ObjectiveSecond objective={props.objective} />
            </div>
            <div>
              <div className="TitleDiv">EDUCATION</div>
              <EducationSecond education={props.education} />
            </div>
            <div>
              <div className="TitleDiv">LANGUAGES</div>
              <LanguagesSecond languages={props.languages} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "1vw" }}></div>
      <div
        style={{ backgroundColor: "rgb(145, 30, 30)", height: "6vw" }}
      ></div>
    </div>
    /*</div>*/
  );
});

export default Resume;
