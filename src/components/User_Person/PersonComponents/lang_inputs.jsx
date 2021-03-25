import React, { useEffect } from "react";
import { SendPostRequest, SendGetRequest, SendDeleteRequest } from "../../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';


export default function LangInputs(props) {
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.userInfo);
  let personLanguagesInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.languages : [];
  useEffect(() => {
    props.setInfoLanguages(personLanguagesInfo);
  }, [userInfo]);
  return (
    <div className="manage-inputs-container">
      <div className="manage-inputs-title">Language</div>
      <div className="manage-inputs-main">
        <div className="manage-inputs-side">
          <div className="manage-inputs-box">
            <label htmlFor="inp_lang">Language</label>
            <input
              type="text"
              id="inp_lang"
              placeholder="English"
              onChange={(e) => props.manageChange(e, "languagesName")}
            />
          </div>
          <div className="manage-inputs-box">
            <label htmlFor="inp_lang_level">Profiency</label>
            <input
              type="range"
              onChange={(e) => props.manageChange(e, "languagesLevel")}
            />
          </div>
          <div className="add-button-container">
            <div
              className="add-button"
              onClick={() =>
                SendPostRequest(
                  "http://ecvat.online/back/public/api/language",
                  props.infoLanguage
                ).then((data) => {
                  if (data === "Wrong pass") {
                    Alert.error('Wrong inputs', {
                      position: 'top-right',
                      effect: 'slide',
                      timeout: 2000
                  });
                  } else {
                    Alert.success('Language added!', {
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
          {props.languages.map((value, index) => {
            return (
              <div key={index} className="edu-exp-item-container" title={`${value.level}%`}>
                <div className="edu-exp-title">
                  {value.name}
                </div>
                <div
                  className="edu-exp-remove-icon"
                  onClick={() =>
                    SendDeleteRequest(
                      `http://ecvat.online/back/public/api/language/${value.id}`
                    ).then(() => {
                      Alert.success('Language deleted!', {
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
