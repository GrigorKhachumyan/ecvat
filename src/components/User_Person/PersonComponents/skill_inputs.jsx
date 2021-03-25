import React, { useEffect } from "react";
import {
  SendPostRequest,
  SendGetRequest,
  SendDeleteRequest,
} from "../../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';


export default function SkillInputs(props) {
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.userInfo);
  let personSkillsInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.skills : [];
  useEffect(() => {
    props.setInfoSkills(personSkillsInfo);
  }, [userInfo]);
  return (
    <div className="manage-inputs-container">
      <div className="manage-inputs-title">Skill</div>
      <div className="manage-inputs-main">
        <div className="manage-inputs-side">
          <div className="manage-inputs-box">
            <label htmlFor="inp_skill">Skill</label>
            <input
              type="text"
              id="inp_skill"
              placeholder="PHP"
              onChange={(e) => props.manageChange(e, "skillsName")}
            />
          </div>
          <div className="manage-inputs-box">
            <label htmlFor="inp_skill_level">Profiency</label>
            <input
              type="range"
              onChange={(e) => props.manageChange(e, "skillsLevel")}
            />
          </div>
          <div className="add-button-container">
            <div
              className="add-button"
              onClick={() =>
                SendPostRequest(
                  "http://ecvat.online/back/public/api/skill",
                  props.infoSkill
                ).then((data) => {
                  if (data === "Wrong pass") {
                    Alert.error('Wrong inputs', {
                      position: 'top-right',
                      effect: 'slide',
                      timeout: 2000
                  });
                  } else {
                    Alert.success('Skill added!', {
                      position: 'top-right',
                      effect: 'slide',
                      timeout: 2000
                  });
                    let userId = window.localStorage.getItem("user_id");
                    SendGetRequest(
                      `http://ecvat.online/back/public/api/user/${userId}`
                    ).then((data) => {
                      let dataObj = { ...data };
                      dispatch({ type: "userInfo", payload: dataObj.user });
                    });
                  }
                })
              }
            >
              Add
            </div>
          </div>
        </div>
        <div className="manage-inputs-side">
          {props.skills.map((value, index) => {
            return (
              <div key={index} className="edu-exp-item-container" title={`${value.level}%`}>
                <div className="edu-exp-title">
                  {value.name}
                </div>
                <div
                  className="edu-exp-remove-icon"
                  onClick={() =>
                    SendDeleteRequest(
                      `http://ecvat.online/back/public/api/skill/${value.id}`
                    ).then(() => {
                      Alert.success('Skill deleted!', {
                        position: 'top-right',
                        effect: 'slide',
                        timeout: 2000
                    });
                      let userId = window.localStorage.getItem("user_id");
                      SendGetRequest(
                        `http://ecvat.online/back/public/api/user/${userId}`
                      ).then((data) => {
                        let dataObj = { ...data };
                        dispatch({ type: "userInfo", payload: dataObj.user });
                      });
                    })
                  }
                >
                  <img src={require("../../../img/close.svg")} alt="img" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
