import React from "react";

export default function CompanynMain(props) {
  let virtualCompanyInfo = props.contact;
  let logoUrl = virtualCompanyInfo.logo
    ? {
        backgroundImage: `url(http://ecvat.online/back/storage/app/public/${virtualCompanyInfo.logo})`,
      }
    : 0;
  return (
    <div className="user-main-info-container">
      <div className="user-left">
        <div className="user-avatar" style={logoUrl ? logoUrl : {}}></div>
        <div className="user-name-prof">
          <div className="user-name">
            {virtualCompanyInfo.name ? virtualCompanyInfo.name : ""}
          </div>
          <div className="user-prof">
            {virtualCompanyInfo.specialization
              ? virtualCompanyInfo.specialization
              : ""}
          </div>
        </div>
      </div>
      <div className="user-right">
        <div className="about-title">About</div>
        <div className="about-text">
          {virtualCompanyInfo.info ? virtualCompanyInfo.info : ""}
        </div>
      </div>
    </div>
  );
}
