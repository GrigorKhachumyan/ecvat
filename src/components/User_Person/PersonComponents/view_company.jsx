import React from "react";
import { Link } from "react-router-dom";

export default function Company(props) {
  let logoUrl =
    props.compInfo && props.compInfo.logo
      ? {
          backgroundImage: `url(http://ecvat.online/back/storage/app/public/${props.compInfo.logo})`,
        }
      : 0;
  return (
    <div className="info-box-container vacancy-box">
      <div className="box-main">
        <div className="vacancy-company-logo-name">
          <Link to="/person/CompanyPage_Wiew">
            <div
              className="vacancy-company-logo"
              style={logoUrl?logoUrl:{}}
              onClick={() => {
              
                console.log(props.compInfo.user_id);
                window.localStorage.setItem(
                  "userWiewId",
                  props.compInfo.user_id
                );
              }}
            ></div>
          </Link>
          <div className="vacancy-company-name">
            <Link to="/person/CompanyPage_Wiew">
              <div
                onClick={() => {
                  console.log(props.compInfo.user_id);
                  window.localStorage.setItem(
                    "userWiewId",
                    props.compInfo.user_id
                  );
                }}
                className="comp-name"
              >
                {props.compInfo.name}
              </div>
            </Link>
            <div className="comp-name">{props.compInfo.specialization}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
