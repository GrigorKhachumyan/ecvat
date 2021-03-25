import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InfoBoxEdu(props) {
  const userInfoObj = useSelector((state) => state.userInfo);
  const userInfo =
    window.localStorage.getItem("user_type") === "company"
      ? props.userInfo
      : userInfoObj;
  return (
    <div className="info-box-container">
      <div className="box-title-container">Education</div>
      {userInfo && (
        <div className="box-main">
          {userInfo.user_info.educations
            ? userInfo.user_info.educations.map((item, index) => {
                return (
                  <div key={index} className="ed-exp-item">
                    <div className="ed-exp-prof">{item.profession}</div>
                    <div className="ed-exp-more">
                      <div className="more-place">{item.name}</div>
                      <div className="more-date">
                        {item.start_date} - {item.end_date}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      )}
    </div>
  );
}
