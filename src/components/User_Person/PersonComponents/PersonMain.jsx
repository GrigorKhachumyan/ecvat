import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PersonMain(props) {
  const userInfo = useSelector((state) => state.userInfo);
  let user_info = userInfo && userInfo.user_info ? userInfo.user_info : 0;
  let logoUrl =
    userInfo && userInfo.user_info
      ? {
          backgroundImage: `url(http://ecvat.online/back/storage/app/public/${user_info.profile_picture})`,
        }
      : 0;

  return (
    <div className="user-main-info-container">
      <div className="user-left">
        <div className="user-avatar" style={logoUrl ? logoUrl : {}}></div>
        <div className="user-name-prof">
          <div className="user-name">
            {userInfo ? userInfo.user_info.name : ""}
          </div>
          <div className="user-prof">
            {userInfo ? userInfo.user_info.specialization : ""}
          </div>
        </div>
      </div>
      <div className="user-right">
        <div className="about-title">About</div>
        <div className="about-text">
          {userInfo ? userInfo.user_info.info : ""}
        </div>
      </div>
    </div>
  );
}
