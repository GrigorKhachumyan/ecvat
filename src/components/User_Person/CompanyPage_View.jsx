import React, { useState, useEffect } from "react";
import Footer from "../ReuseableComponents/footer";
import UserHeader from "../header/user_header";
import CompanyMain from "../User_Company/CompanyComponents/CompanyMain";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import "../../css/header.css";
import "../../css/main.css";
import { SendPostRequest, SendGetRequest } from "../../RequestHelpers";
import PersonMenu from "./PersonComponents/PersonMenu";
import VacancyPostItem from "./PersonComponents/vacancy_post_item";
import PageMap from "../map";

export default function CompanyPage(props) {
  const [companyInfo, setCompanyInfo] = useState({});
  const [ready, setReady] = useState(false);
;
  let compId = window.localStorage.getItem("userWiewId");
  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/user/${compId}`).then(
      (data) => {
        console.log("userdata");
        let dataObj = { ...data };
       
       
        setCompanyInfo(dataObj.user);
      
      }
    ).then(()=>{
      

    })
  }, []);
  console.log(companyInfo);
  return (
    <>
      <PersonMenu></PersonMenu>
      <UserTopBar />
      <UserHeader />
      <CompanyMain contact={companyInfo.email ? companyInfo.user_info : ""} />

      {companyInfo.email &&
        companyInfo.user_info.vacancies.map((value, index) => {
          return (
            <VacancyPostItem noImage={true} key={index} vacancyInfo={value} />
          );
        })}
      {companyInfo.user_info&&companyInfo.user_info.address&&<PageMap
        clName="all-pages-map"
        address={companyInfo.user_info}
      />
     }
      <Footer />
    </>
  );
}
