import React, { useEffect } from "react";
import Footer from "../ReuseableComponents/footer";
import UserHeader from "../header/user_header";
import PersonMain from "./PersonComponents/PersonMain";
import PersonMenu from "./PersonComponents/PersonMenu";
import SkillBox from "./PersonComponents/skill_box";
import InfoBoxEdu from "./PersonComponents/info_box_educations";
import InfoBoxExp from "./PersonComponents/info_box_experiencies";
import LangBox from "./PersonComponents/lang_box";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import ContactBox from "./PersonComponents/contact_box";
import "../../css/header.css";
import "../../css/main.css";
import { useDispatch, useSelector } from "react-redux";
import { SendGetRequest } from "../../RequestHelpers";

export default function PersonPage(props) {
  const dispatch = useDispatch();
  const userId = window.localStorage.getItem("user_id");
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/user/${userId}`).then(
      (data) => {
        
        let dataObj = { ...data };
        dispatch({ type: "userInfo", payload: dataObj.user });
      }
    );
  }, []);

  return (
    <>
      <PersonMenu />
      <UserTopBar />
      <UserHeader />

      <PersonMain />
      <ContactBox></ContactBox>

      <InfoBoxEdu />
      <InfoBoxExp />
      <div className="skills-main-container">
        <SkillBox />
        <LangBox />
      </div>

      <Footer />
    </>
  );
}
