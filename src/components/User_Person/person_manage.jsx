import React, { useState, useEffect } from "react";
import MainTopBar from "../header/top-bar-main";
import Footer from "../ReuseableComponents/footer";
import ManageHeader from "../ReuseableComponents/manage_header";
import PersonMenu from "./PersonComponents/PersonMenu";
import MainWrapper from "../ReuseableComponents/main_wrapper";
import ContactInputs from "../ReuseableComponents/contact_inputs";
import EduInputs from "./PersonComponents/edu_inputs";
import ExpInputs from "./PersonComponents/exp_inputs";
import SkillInputs from "./PersonComponents/skill_inputs";
import LangInputs from "./PersonComponents/lang_inputs";
import { formDataRequest, formDataUpdateRequest } from "../../RequestHelpers";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import { useDispatch, useSelector } from "react-redux";
import { SendPostRequest, SendGetRequest } from "../../RequestHelpers";
import Alert from 'react-s-alert';
export default function PersonManage(props) {

  let userId = window.localStorage.getItem("user_id");
  let userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/user/${userId}`).then(
      (data) => {
        let dataObj = { ...data };
        dispatch({ type: "userInfo", payload: dataObj.user });
      }
    );
  }, []);
  let personContactInfo =
    userInfo && userInfo.user_info
      ? {
          name: userInfo.user_info.name ? userInfo.user_info.name : "",
          sur_name: userInfo.user_info.sur_name
            ? userInfo.user_info.sur_name
            : "",
          specialization: userInfo.user_info.specialization
            ? userInfo.user_info.specialization
            : "",
          address: userInfo.user_info.address ? userInfo.user_info.address : "",
          phone_number: userInfo.user_info.phone_number
            ? userInfo.user_info.phone_number
            : "",
          birth_date: userInfo.user_info.birth_date
            ? userInfo.user_info.birth_date
            : "",
          info: userInfo.user_info.info ? userInfo.user_info.info : "",
        }
      : {};
  let personSkillsInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.skills : [];
  let personLanguagesInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.languages : [];
  let personExperiancesInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.experiences : [];
  let personEducationsInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.educations : [];
  const [infoPerson, setInfoPerson] = useState(personContactInfo);
  const [infoSkill, setInfoSkill] = useState({
    name: "",
    level: "",
  });
  const [infoSkills, setInfoSkills] = useState(personSkillsInfo);

  const [infoLanguage, setInfoLanguage] = useState({
    name: "",
    level: "",
  });
  const [infoLanguages, setInfoLanguages] = useState(personLanguagesInfo);
  const [infoEducation, setInfoEducation] = useState({
    name: "",
    profession: "",
    start_date: "",
    end_date: "",
  });
  const [infoEducations, setInfoEducations] = useState(personEducationsInfo);
  const [infoExperiance, setInfoExperiance] = useState({
    name: "",
    profession: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [infoExperiances, setInfoExperiances] = useState(personExperiancesInfo);

  const manageChange = (e, changeItem) => {
    const prevInfoSkill = { ...infoSkill };
    const prevInfoLanguage = { ...infoLanguage };
    const prevInfoEducation = { ...infoEducation };
    const prevExperience = { ...infoExperiance };
    switch (changeItem) {
      case "name":
      case "sur_name":
      case "specialization":
      case "address":
      case "phone_number":
      case "birth_date":
      case "info":
        const prevInfoPerson = { ...infoPerson };
        prevInfoPerson[changeItem] = e.target.value;
        setInfoPerson(prevInfoPerson);
        break;
      case "skillsName":
        prevInfoSkill.name = e.target.value;
        setInfoSkill(prevInfoSkill);
        break;
      case "skillsLevel":
        prevInfoSkill.level = e.target.value;
        setInfoSkill(prevInfoSkill);
        break;
      case "languagesName":
        prevInfoLanguage.name = e.target.value;
        setInfoLanguage(prevInfoLanguage);
        break;
      case "languagesLevel":
        prevInfoLanguage.level = e.target.value;
        setInfoLanguage(prevInfoLanguage);
        break;
      case "educationsName":
        prevInfoEducation.name = e.target.value;
        setInfoEducation(prevInfoEducation);
        break;
      case "educationsProfession":
        prevInfoEducation.profession = e.target.value;
        setInfoEducation(prevInfoEducation);
        break;
      case "educationsStart":
        prevInfoEducation.start_date = e.target.value;
        setInfoEducation(prevInfoEducation);
        break;
      case "educationsEnd":
        prevInfoEducation.end_date = e.target.value;
        setInfoEducation(prevInfoEducation);
        break;
      case "experiencesName":
        prevExperience.name = e.target.value;
        setInfoExperiance(prevExperience);
        break;
      case "experiencesProfession":
        prevExperience.profession = e.target.value;
        setInfoExperiance(prevExperience);
        break;
      case "experiencesStart":
        prevExperience.start_date = e.target.value;
        setInfoExperiance(prevExperience);
        break;
      case "experiencesEnd":
        prevExperience.end_date = e.target.value;
        setInfoExperiance(prevExperience);
        break;
      case "experiencesDescription":
        prevExperience.description = e.target.value;
        setInfoExperiance(prevExperience);
        break;
      case "logo":
        const prevInfoPersonNew = { ...infoPerson };
        prevInfoPersonNew.profile_picture = e.target.files[0];
        setInfoPerson(prevInfoPersonNew);
        break;
      default:
        Alert.error('Wrong inputs!', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
    }
  };

  const manageSaveRequest = (e) => {
    formDataRequest(
      "http://ecvat.online/back/public/api/person",
      infoPerson,
      "person"
    ).then((data) => {
      if (data === "wrong inputs") {
        Alert.error('Wrong inputs!', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
      } else {
        SendGetRequest(
          `http://ecvat.online/back/public/api/user/${userId}`
        ).then((data) => {
          let dataObj = { ...data };
          dispatch({ type: "userInfo", payload: dataObj.user });
        });
      }
    });
  };
  const manageChangeRequest = (e) => {
    formDataUpdateRequest(
      `http://ecvat.online/back/public/api/person/${userInfo.user_info.id}`,
      infoPerson,
      "person"
    ).then((data) => {
      if (data === "wrong inputs") {
        Alert.error('Wrong inputs!', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
      } else {
        SendGetRequest(
          `http://ecvat.online/back/public/api/user/${userId}`
        ).then((data) => {
          let dataObj = { ...data };
          dispatch({ type: "userInfo", payload: dataObj.user });
        });
      }
    });
  };

  return (
    <>
    <Alert/>
      <UserTopBar setLoged={props.setLoged} />
      <PersonMenu />
      <ManageHeader />
      <ContactInputs
        manageSaveRequest={manageSaveRequest}
        manageChangeRequest={manageChangeRequest}
        setInfoPerson={setInfoPerson}
        contact={infoPerson}
        manageChange={manageChange}
        userInfo={userInfo}
      />
     
      <EduInputs
        setInfoEducations={setInfoEducations}
        infoEducation={infoEducation}
        educations={infoEducations}
        manageChange={manageChange}
      />
      <ExpInputs
        setInfoExperiances={setInfoExperiances}
        infoExperiance={infoExperiance}
        experiences={infoExperiances}
        manageChange={manageChange}
      />
      <SkillInputs
        setInfoSkills={setInfoSkills}
        infoSkill={infoSkill}
        skills={infoSkills}
        manageChange={manageChange}
      />
      <LangInputs
        setInfoLanguages={setInfoLanguages}
        infoLanguage={infoLanguage}
        languages={infoLanguages}
        manageChange={manageChange}
      />

      <Footer />
    </>
  );
}
