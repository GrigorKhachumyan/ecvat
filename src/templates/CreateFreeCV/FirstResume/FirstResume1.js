import React from "react";
import "./Resume.css";
import NameProfContact1 from "./ResumeComponents/NameProfContact1";
import Education from "./ResumeComponents/Education";
import Experiance from "./ResumeComponents/Experiance";
import Languages from "./ResumeComponents/Languages";
import Skills from "./ResumeComponents/Skills";
import Objective from "./ResumeComponents/Objective";
import Photo from "./ResumeComponents/Photo";

class Resume extends React.Component {
  state = {};
  render() {
    return (
      <div className="Resume">
        <div className="ResumeBody1">
          <div
            style={{
              width: "10vw",
              backgroundColor: "#d9d8dd",
            }}
          >
            <Photo />
            <div className="OutlineBlack"></div>
            <div className="ProfileDiv">PROFILE</div>
            <Objective objective={this.props.objective} />
            <div className="LangDiv">LANGUAGES</div>
            <div className="Outline"></div>
            <Languages languages={this.props.languages} />
            <div className="SkillsDiv">SKILLS</div>
            <div className="Outline"></div>
            <Skills skills={this.props.skills} />
          </div>
          <div
            style={{
              width: "19.7vw",
              backgroundColor: "#f1f1f3",
            }}
          >
            <NameProfContact1
              name={this.props.name}
              surname={this.props.surname}
              profession={this.props.profession}
              adress={this.props.adress}
              phone={this.props.phone}
              mail={this.props.mail}
              birdthDate={this.props.birdthDate}
            />
            <div className="ExpDiv">EXPERIENCE</div>
            <Experiance experiance={this.props.experiance} />
            <div className="EduDiv">EDUCATION</div>
            <Education education={this.props.education} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
