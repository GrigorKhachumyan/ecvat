import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SkillBox(props) {
  const userInfoObj = useSelector((state) => state.userInfo);
  const userInfo =
    window.localStorage.getItem("user_type") === "company"
      ? props.userInfo
      : userInfoObj;
  return (
    <div className="info-box-container skill-box">
      <div className="box-title-container">Skills</div>
      {userInfo && (
        <div className="box-main">
          {userInfo.user_info.skills
            ? userInfo.user_info.skills.map((item, index) => {
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
