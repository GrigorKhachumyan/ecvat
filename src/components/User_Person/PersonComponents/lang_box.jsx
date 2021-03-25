import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LangBox(props) {
  const userInfoObj = useSelector((state) => state.userInfo);
  const userInfo =
    window.localStorage.getItem("user_type") === "company"
      ? props.userInfo
      : userInfoObj;
  return (
    <div className="info-box-container skill-box">
      <div className="box-title-container">Languages</div>
      {userInfo && (
        <div className="box-main">
          {userInfo.user_info.languages
            ? userInfo.user_info.languages.map((item, index) => {
                return (
                  <div key={index} className="skill-item">
                    <div className="skill-topic">{item.name}</div>
                    <div className="skill-more">
                      <div className="skill-profiency">
                        <div
                          className="profiency-level"
                          style={{ width: item.level + "%" }}
                        ></div>
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
