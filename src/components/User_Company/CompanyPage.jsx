import React, { useState, useEffect } from "react";
import Footer from "../ReuseableComponents/footer";
import UserHeader from "../header/user_header";
import CompanyMain from "./CompanyComponents/CompanyMain";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import CompanyMenu from "./CompanyComponents/CompanyMenu";
import "../../css/header.css";
import "../../css/main.css";
import CompanyVacansy from "./CompanyComponents/company_vacansy";
import VacancyADD from "./CompanyComponents/VacancyAdd";
import { SendPostRequest, SendGetRequest } from "../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import PageMap from "../map";

export default function CompanyPage(props) {
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
  const [vacancyInfo, setVacancyInfo] = useState({
    company_id: userId,
    title: "",
    description: "",
    country: "",
    city: "",
    deadline: "",
    position: "",
  });
  let vacancyInfoObj = { ...vacancyInfo };
  const changeVacancyInfo = (e, changeInput) => {
    switch (changeInput) {
      case "title":
        vacancyInfoObj.title = e.target.value;
        break;
      case "description":
        vacancyInfoObj.description = e.target.value;
        break;
      case "country":
        vacancyInfoObj.country = e.target.value;
        break;
      case "city":
        vacancyInfoObj.city = e.target.value;
        break;
      case "deadline":
        vacancyInfoObj.deadline = e.target.value;
        break;
      case "position":
        vacancyInfoObj.position = e.target.value;
        break;

      default:
        alert("the case is not found");
        break;
    }
  };

  const addVacnacy = () => {
    if (userInfo) {
      SendPostRequest(
        "http://ecvat.online/back/public/api/vacancy",
        vacancyInfoObj
      ).then((data) => {
        if (data === "Wrong pass") {
          Alert.error('Wrong inputs.All inputs are required.', {
            position: 'top-right',
            effect: 'slide',
            timeout: 2000
        });
        } else {
          Alert.success('Vacancy added!', {
            position: 'top-right',
            effect: 'slide',
            timeout: 2000
        });
          SendGetRequest(
            `http://ecvat.online/back/public/api/user/${userId}`
          ).then((data) => {
            let dataObj = { ...data };
            dispatch({ type: "userInfo", payload: dataObj.user });
          });
        }
      });
    } else {
      Alert.error('Menage profile before adding a vacancy.', {
        position: 'top-right',
        effect: 'slide',
        timeout: 2000
    });
    }
  };

  return (
    <>
    <Alert/>
      <CompanyMenu />
      <UserTopBar />
      <UserHeader />
      <CompanyMain contact={userInfo ? userInfo.user_info : ""} />
      <VacancyADD
        changeVacancyInfo={changeVacancyInfo}
        addVacnacy={addVacnacy}
        inpValues={vacancyInfoObj}
      ></VacancyADD>
      {userInfo &&
        userInfo.user_info.vacancies.map((value, index) => {
          return <CompanyVacansy key={index} vacansyInfo={value} />;
        })}
         {userInfo&&userInfo.user_info.address&&<PageMap
        clName="all-pages-map"
        address={userInfo.user_info}
      />
         }
      <Footer />
    </>
  );
}
