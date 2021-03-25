import React from "react";
import Tools from "../Tools/Tools.js";
import FirstResume1 from "../FirstResume/FirstResume1";
import FirstResume2 from "../FirstResume/FirstResume2";
import FirstResume3 from "../FirstResume/FirstResume3";
import FirstResume4 from "../FirstResume/FirstResume4";
import SecondResume1 from "../SecondResume/SecondResume1";
import SecondResume2 from "../SecondResume/SecondResume2";
import Slider from "../Slider/Slider";

import UserTopBar from "../../../ReuseableComponents/UserTopBar";
import MainTopBar from "../../../header/top-bar-main";
import "../main.css";
import { Test } from "./pdf.js";
import Footer from "../../../ReuseableComponents/footer.jsx";
import ThirdResume from "./ThirdResume/ThirdResume.jsx";

class CCV extends React.Component {
  state = window.localStorage.ccvState
    ? JSON.parse(window.localStorage.ccvState)
    : {
        contact: {
          name: "",
          surname: "",
          profession: "",
          adress: "",
          phone: "",
          mail: "",
          birdthDate: "",
          objective: "",
        },
        eduInputs: {
          eduPlace: "",
          eduProf: "",
          eduStart: "",
          eduEnd: "",
        },
        education: [],
        expInputs: {
          expPlace: "",
          expProf: "",
          expStart: "",
          expEnd: "",
          expDescription: "",
        },
        experiance: [],
        langInputs: {
          langName: "",
          langLVL: 50,
        },
        languages: [],
        skillsInputs: {
          skillsName: "",
          skillsLVL: 50,
        },
        skills: [],
        photo: "",
        clicked: ["ContactTools", "SecondResume", "1"],
      };

  changeState = (e, stateName, stateNameKey, clickedNumber) => {
    let stateNameObj;
    let inputName = false;
    let inputValue;
    switch (stateName) {
      case "langInputs":
      case "skillsInputs":
      case "eduInputs":
      case "expInputs":
      case "contact":
      case "objective":
        stateNameObj = { ...this.state[stateName] };
        stateNameObj[stateNameKey] = e.target.value;
        break;
      case "languages":
      case "skills":
      case "education":
      case "experiance":
        if (stateNameKey === 0 || stateNameKey) {
          stateNameObj = [...this.state[stateName]];
          stateNameObj.splice(stateNameKey, 1);
        } else {
          switch (stateName) {
            case "languages":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push({
                [this.state.langInputs.langName]: this.state.langInputs.langLVL,
              });
              inputName = "langInputs";
              inputValue = {
                langName:"",
                langLVL:50
              }
              break;
            case "skills":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push({
                [this.state.skillsInputs.skillsName]: this.state.skillsInputs.skillsLVL,
              });
              inputName = "skillsInputs";
              inputValue = {
                skillsName:"",
                skillsLVL:50
              }
              break;
            case "education":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push(this.state.eduInputs);
              inputName = "eduInputs";
              inputValue = {
                eduPlace: "",
                eduProf: "",
                eduStart: "",
                eduEnd: "",
              }
              break;
            case "experiance":
              stateNameObj = [...this.state[stateName]];
              stateNameObj.push(this.state.expInputs);
              inputName = "expInputs";
              inputValue = {
                expPlace: "",
                expProf: "",
                expStart: "",
                expEnd: "",
                expDescription: "",
              }
              break;
          }
        }
        break;
      case "clicked":
        stateNameObj = [...this.state[stateName]];
        if (
          stateNameObj[clickedNumber] === stateNameKey &&
          clickedNumber === 0
        ) {
          stateNameObj[clickedNumber] = "";
        } else {
          if (
            clickedNumber === 1 &&
            stateNameObj[clickedNumber] !== stateNameKey
          ) {
            stateNameObj[2] = "1";
          }
          stateNameObj[clickedNumber] = stateNameKey;
        }
        break;
      default:
        alert("EROR_CASE IS NOT FOUND");
    }
    let psevdoState = { ...this.state };
    psevdoState[stateName] = stateNameObj;
    window.localStorage.setItem("ccvState", JSON.stringify(psevdoState));
    if(inputName) {
      this.setState({
        [stateName]: stateNameObj,
        [inputName]: inputValue
      })
    } else {
      this.setState({
        [stateName]: stateNameObj,
      })
    }
  };

  changePhoto = (photo) => {
    const setPhoto = (e) => {
      this.setState({
        photo: e.target.result,
      });
    };
    let reader = new FileReader();
    reader.readAsDataURL(photo.target.files[0]);
    reader.onload = setPhoto;
  };

  componentDidMount() {
    if (
      window.localStorage.user_type === "person" &&
      !window.localStorage.ccvState
    ) {
      let cvInfoObj =
        this.props.userInfo && this.props.userInfo.user_info
          ? { ...this.props.userInfo }
          : { user_info: {} };
      let cvInfoNewObj = {};
      let eduObj = cvInfoObj.user_info.educations
        ? cvInfoObj.user_info.educations.map((value, index) => {
            let eduNewObj = {
              eduPlace: value.name,
              eduProf: value.profession,
              eduStart: value.start_date,
              eduEnd: value.end_date,
            };
            return eduNewObj;
          })
        : [];
      let expObj = cvInfoObj.user_info.experiences
        ? cvInfoObj.user_info.experiences.map((value, index) => {
            let expNewObj = {
              expPlace: value.name,
              expProf: value.profession,
              expStart: value.start_date,
              expEnd: value.end_date,
              expDescription: value.description,
            };
            return expNewObj;
          })
        : [];
      let skillsObj = cvInfoObj.user_info.skills
        ? cvInfoObj.user_info.skills.map((value, index) => {
            let skillsNewObj = {};
            skillsNewObj[value.name] = value.level;
            return skillsNewObj;
          })
        : [];
      let langObj = cvInfoObj.user_info.languages
        ? cvInfoObj.user_info.languages.map((value, index) => {
            let langNewObj = {};
            langNewObj[value.name] = value.level;
            return langNewObj;
          })
        : [];

      cvInfoNewObj.contact = {
        name: cvInfoObj.user_info.name ? cvInfoObj.user_info.name : "",
        surname: cvInfoObj.user_info.sur_name
          ? cvInfoObj.user_info.sur_name
          : "",
        profession: cvInfoObj.user_info.specialization
          ? cvInfoObj.user_info.specialization
          : "",
        adress: cvInfoObj.user_info.address ? cvInfoObj.user_info.address : "",
        phone: cvInfoObj.user_info.phone_number
          ? cvInfoObj.user_info.phone_number
          : "",
        mail: cvInfoObj.email ? cvInfoObj.email : "",
        birdthDate: cvInfoObj.user_info.birth_date
          ? cvInfoObj.user_info.birth_date
          : "",
        objective: cvInfoObj.user_info.info ? cvInfoObj.user_info.info : "",
      };
      cvInfoNewObj.education = [...eduObj];
      cvInfoNewObj.experiance = [...expObj];
      cvInfoNewObj.languages = [...langObj];
      cvInfoNewObj.skills = [...skillsObj];
      cvInfoNewObj.expInputs = {
        expPlace: "",
        expProf: "",
        expStart: "",
        expEnd: "",
        expDescription: "",
      };
      cvInfoNewObj.eduInputs = {
        eduPlace: "",
        eduProf: "",
        eduStart: "",
        eduEnd: "",
      };
      cvInfoNewObj.langInputs = {
        langName: "",
        langLVL: "50",
      };
      cvInfoNewObj.skillsInputs = {
        skillsName: "",
        skillsLVL: "50",
      };
      cvInfoNewObj.photo = "";
      cvInfoNewObj.clicked = ["ContactTools", "SecondResume", "1"];
      window.localStorage.setItem("ccvState", JSON.stringify(cvInfoNewObj));
      this.setState(cvInfoNewObj);
    }
  }
  render() {
    return (
      <>
        {window.localStorage.user_type !== "guest" && <UserTopBar />}
        {window.localStorage.user_type === "guest" && <MainTopBar />}

        <div className="ccv-page">
          <div className="page-main">
            <Tools
              contactInputs={this.state.contact}
              skillInputs={this.state.skillsInputs}
              languageInputs={this.state.langInputs}
              eduqationInputs={this.state.eduInputs}
              experianceInputs={this.state.expInputs}
              changeState={this.changeState}
              clickedTools={this.state.clicked[0]}
              languages={this.state.languages}
              skills={this.state.skills}
              experiance={this.state.experiance}
              education={this.state.education}
              changePhoto={this.changePhoto}
            />

            <div className="resume-side">
              <Test className="resume-side">
                {({ ref }) => <ThirdResume ref={ref} info={this.state} />}
              </Test>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CCV;
