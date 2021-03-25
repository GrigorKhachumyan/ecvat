import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SendGetRequest, SendDeleteRequest } from "../../../RequestHelpers";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export default function CompanyVacansy(props) {
  const dispatch = useDispatch();
  return (
    <>
    <Alert/>
    <div className="info-box-container">
      <div className="box-title-container">{props.vacansyInfo.title}</div>
      <div className="box-main">
        <div className="vacansy-text">{props.vacansyInfo.description}</div>
        <div className="vacansy-control-buttons">
          <Link to="/company/applications">
            <div
              onClick={() => {
                window.localStorage.setItem(
                  "vacancyWiewId",
                  props.vacansyInfo.id
                );
              }}
              className="vacansy-control-btn see-apps-btn"
            >
              See applications(
              {props.vacansyInfo.persons ? props.vacansyInfo.persons.length : 0}
              )
            </div>
          </Link>
          <div
            onClick={() =>
              SendDeleteRequest(
                `http://ecvat.online/back/public/api/vacancy/${props.vacansyInfo.id}`
              ).then(() => {
                Alert.success('Vacancy deleted!', {
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
            className="vacansy-control-btn vacancy-remove-btn"
          >
            Remove vacancy
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
