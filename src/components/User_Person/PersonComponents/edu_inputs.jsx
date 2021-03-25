import React, { useEffect } from "react";
import { SendPostRequest, SendGetRequest, SendDeleteRequest } from "../../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';


export default function EduInputs(props) {
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.userInfo);
  let personEducationsInfo =
    userInfo && userInfo.user_info ? userInfo.user_info.educations : [];
  useEffect(() => {
    props.setInfoEducations(personEducationsInfo);
  }, [userInfo]);
  return (
    <div className="manage-inputs-container">
      <div className="manage-inputs-title">Education</div>
      <div className="manage-inputs-main exp-inputs">
        <div className="manage-inputs-side">
          <div className="inp-flexbox">
            <div className="manage-inputs-box">
              <label htmlFor="inp_company">Name of school/institution</label>
              <input
                type="text"
                id="inp_company"
                placeholder="Harvard"
                onChange={(e) => props.manageChange(e, "educationsName")}
              />
            </div>
            <div className="manage-inputs-box">
              <label htmlFor="inp_title">Degree(s)</label>
              <input
                type="text"
                id="inp_title"
                placeholder="Bachelor of science"
                onChange={(e) => props.manageChange(e, "educationsProfession")}
              />
            </div>
          </div>

          <div className="inp-flexbox">
            <div className="manage-inputs-box">
              <label htmlFor="inp_start">Start date</label>
              <input
                type="date"
                id="inp_start"
                placeholder="2008-03-04"
                onChange={(e) => props.manageChange(e, "educationsStart")}
              />
            </div>
            <div className="manage-inputs-box">
              <label htmlFor="inp_end">End date</label>
              <input
                type="date"
                id="inp_end"
                placeholder="2012-03-04"
                onChange={(e) => props.manageChange(e, "educationsEnd")}
              />
            </div>
          </div>
          <div className="add-button-container">
            <div
              className="add-button"
              onClick={() =>
                SendPostRequest(
                  "http://ecvat.online/back/public/api/education",
                  props.infoEducation
                ).then((data) => {
                  if (data === "Wrong pass") {
                    Alert.error('Wrong inputs', {
                      position: 'top-right',
                      effect: 'slide',
                      timeout: 2000
                  });
                  } else {
                    Alert.success('Education added!', {
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
          {props.educations.map((value, index) => {
            return (
              <div
                key={index}
                className="edu-exp-item-container"
                title={value.name}
              >
                <div className="edu-exp-title">
                  {value.profession}
                </div>
                <div
                  className="edu-exp-remove-icon"
                  onClick={() =>
                    SendDeleteRequest(
                      `http://ecvat.online/back/public/api/education/${value.id}`
                    ).then(() => {
                      Alert.success('Education deleted!', {
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
                  <img src={require("../../../img/close.svg")} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
