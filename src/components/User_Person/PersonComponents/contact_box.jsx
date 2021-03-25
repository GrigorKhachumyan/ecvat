import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ContactBox(props) {
  const userInfoObj = useSelector((state) => state.userInfo);
  const userInfo =
    window.localStorage.getItem("user_type") === "company"
      ? props.userInfo
      : userInfoObj;
  return (
    <div className="info-box-container">
      <div className="box-title-container">Contacts</div>
      <div className="box-main">
        <div className="person-contact-box">
          <div className="person-mail person-info-line">
            {userInfo ? userInfo.email : ""}
          </div>
          <div className="person-adress person-info-line">
            {userInfo ? userInfo.user_info.address : ""}
          </div>
          <div className="person-phone person-info-line">
            {userInfo ? userInfo.user_info.phone_number : ""}
          </div>
          <div className="person-age person-info-line">
            {userInfo && userInfo.user_info && userInfo.user_info.birth_date
              ? userInfo.user_info.birth_date.slice(0, 10)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
