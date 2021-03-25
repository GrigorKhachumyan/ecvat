import React, { useState, useEffect } from "react";
import { SendPostRequest, SendGetRequest } from "../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import CompanyMenu from "./CompanyComponents/CompanyMenu";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import UserHeader from "../header/user_header";
import PersonMainWiew from "./CompanyComponents/PersonMainWiew";
import Footer from "../ReuseableComponents/footer";
import ContactBox from "../User_Person/PersonComponents/contact_box";
import InfoBoxEdu from "../User_Person/PersonComponents/info_box_educations";
import InfoBoxExp from "../User_Person/PersonComponents/info_box_experiencies";
import SkillBox from "../User_Person/PersonComponents/skill_box";
import LangBox from "../User_Person/PersonComponents/lang_box";

export default function PersonPage(props) {
  const dispatch = useDispatch();
  const userId = window.localStorage.getItem("userWiewId");
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/user/${userId}`).then(
      (data) => {
        console.log(data);
        let dataObj = { ...data };
        dispatch({ type: "userInfo", payload: dataObj.user });
      }
    );
  }, []);

  return (
    <>
      <CompanyMenu />
      <UserTopBar />
      <UserHeader />
      <PersonMainWiew userInfo={userInfo} />
      <ContactBox userInfo={userInfo}></ContactBox>

      <InfoBoxEdu userInfo={userInfo} />
      <InfoBoxExp userInfo={userInfo} />
      <div className="skills-main-container">
        <SkillBox userInfo={userInfo} />
        <LangBox userInfo={userInfo} />
      </div>

      <Footer />
    </>
  );
}
