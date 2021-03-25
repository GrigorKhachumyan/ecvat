import React from "react";
import { Link } from "react-router-dom";

export default function WiewPerson(props) {
  let logoUrl =
    props.personInfo && props.personInfo.profile_picture
      ? {
        backgroundImage:`url(http://ecvat.online/back/storage/app/public/${props.personInfo.profile_picture})`,
        }
      : 0;

  return (
    <div className="info-box-container vacancy-box">
      <div className="box-main">
        <div className="vacancy-company-logo-name">
          <Link to="/company/person_page_wiew">
            <div
              className="vacancy-company-logo person-logo-cont"
              style={logoUrl ? logoUrl : {}}
              onClick={() => {
                window.localStorage.setItem(
                  "userWiewId",
                  props.personInfo.user_id
                );
              }}
            ></div>
          </Link>
          <div className="vacancy-company-name">
            <Link to="/company/person_page_wiew">
              <div
                onClick={() => {
                  window.localStorage.setItem(
                    "userWiewId",
                    props.personInfo.user_id
                  );
                }}
                className="comp-name"
              >
                {props.personInfo.name}
              </div>
            </Link>
            <div className="comp-name">{props.personInfo.specialization}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
