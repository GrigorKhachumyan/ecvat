import React, { useState, useEffect } from "react";
import Footer from "../ReuseableComponents/footer";
import ManageHeader from "../ReuseableComponents/manage_header";
import CompanyMenu from "./CompanyComponents/CompanyMenu";
import ContactInputs from "../ReuseableComponents/contact_inputs";
import { formDataRequest, SendPostRequest } from "../../RequestHelpers";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { SendGetRequest, formDataUpdateRequest } from "../../RequestHelpers";
import { Link } from "react-router-dom";

export default function CompanyManage(props) {
  const dispatch = useDispatch();
  let virtualInfoCompany = {
    name: "",
    specialization: "",
    address: "",
    info: "",
    logo: "",
  };
  const [infoCompany, setInfoCompany] = useState(virtualInfoCompany);
  const userId = window.localStorage.getItem("user_id");
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/user/${userId}`).then(
      (data) => {
        let dataObj = { ...data };
        let infoCompanyObj = {
          name: dataObj.user.user_info.name,
          specialization: dataObj.user.user_info.specialization,
          address: dataObj.user.user_info.address,
          info: dataObj.user.user_info.info,
          logo: dataObj.user.user_info.logo,
        };
        setInfoCompany(infoCompanyObj);
      }
    );
  }, []);
  const manageChange = (e, changeItem) => {
    const prevInfoCompany = { ...infoCompany };
    changeItem !== "logo"
      ? (prevInfoCompany[changeItem] = e.target.value)
      : (prevInfoCompany[changeItem] = e.target.files[0]
          ? e.target.files[0]
          : "");
    console.log(infoCompany);
    console.log(prevInfoCompany);
    setInfoCompany(prevInfoCompany);
  };

  const manageSaveRequest = (e) => {
    formDataRequest(
      "http://ecvat.online/back/public/api/company",
      infoCompany,
      "company"
    ).then((data) => {
      if (data === "Wrong inputs") {
        Alert.error('Wrong inputs', {
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
  const manageChangesRequest = (e) => {
    formDataUpdateRequest(
      `http://ecvat.online/back/public/api/company/${userInfo.user_info.id}`,
      infoCompany,
      "company"
    ).then((data) => {
      if (data === "Wrong inputs") {
        Alert.error('Something went wrong, please try again.', {
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
      <UserTopBar />
      <CompanyMenu />
      <ManageHeader />
      <ContactInputs
        contact={infoCompany}
        manageChange={manageChange}
        user="company"
        manageSaveRequest={manageSaveRequest}
        manageChangeRequest={manageChangesRequest}
        userInfo={userInfo}
      />
    
      <Footer />
    </>
  );
}
