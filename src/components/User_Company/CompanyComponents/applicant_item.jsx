import React from "react";
import { Link } from "react-router-dom";

export default function ApplicantItem(props) {
  let logoUrl =
  props.personInfo && props.personInfo.profile_picture
    ? {
        backgroundImage: `url(http://ecvat.online/back/storage/app/public/${props.personInfo.profile_picture})`,
      }
    : 0;

  return (
    <div className="info-box-container aplicants">
      <div className="box-main">
        <div className="user-info-container">
          <div className="user-name-avatar">
            <div
              className="user-avatar"
              style={logoUrl ? logoUrl : {}}
            ></div>
            <div className="user-name">{props.personInfo.name}</div>
            <div className="user-prof">{props.personInfo.specialization}</div>
          </div>

          <div className="user-info">{props.personInfo.info}</div>
        </div>
        <div className="vacansy-control-buttons">
          <Link to="/company/person_page_wiew">
            <div
              onClick={() => {
                window.localStorage.setItem(
                  "userWiewId",
                  props.personInfo.user_id
                );
              }}
              className="vacansy-control-btn see-apps-btn"
            >
              View Person
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
