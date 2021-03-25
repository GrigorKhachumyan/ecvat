import React, { useState, useEffect } from "react";
import CompanyMenu from "./CompanyComponents/CompanyMenu";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import UserHeader from "../header/user_header";
import CompanynMain from "./CompanyComponents/CompanyMain";
import Footer from "../ReuseableComponents/footer";
import ApplicantItem from "./CompanyComponents/applicant_item";
import ResumePopup from "./CompanyComponents/resume_popup";
import { SendPostRequest, SendGetRequest } from "../../RequestHelpers";

export default function CompanyApps(props) {
  const [vacancyInfo, setVacancyInfo] = useState({});
  let vacancyId = window.localStorage.getItem("vacancyWiewId");
  useEffect(() => {
    SendGetRequest(
      `http://ecvat.online/back/public/api/my-vacancy/${vacancyId}`
    ).then((data) => {
      let dataObj = { ...data };
      setVacancyInfo(dataObj.vacancy);
    });
  }, []);
  return (
    <>
      <CompanyMenu />
      <UserTopBar />
      <UserHeader />
      {false && <ResumePopup />}
      <div className="box-title-container aplicants-title">
        Applicants for {vacancyInfo.title ? vacancyInfo.title : ""} vacancy
      </div>
      <div className="aplicants-main-container">
      {vacancyInfo.title &&
        vacancyInfo.persons.map((value, index) => {
          return <ApplicantItem key={index} personInfo={value} />;
        })}
      </div>
      <Footer />
    </>
  );
}
