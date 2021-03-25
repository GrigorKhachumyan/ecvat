import React, { useState } from "react";
import { SendPostRequest } from "../../../RequestHelpers";
import { Link } from "react-router-dom";
import Alert from 'react-s-alert';


export default function VacancyPostItem(props) {
  let logoUrl =
  props.vacancyInfo.company && props.vacancyInfo.company.logo
    ? {
        backgroundImage: `url(http://ecvat.online/back/storage/app/public/${props.vacancyInfo.company.logo})`,
      }
    : 0;
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const addToVacancy = (aplly) => {
    let vacancyId = { vacancy_id: props.vacancyInfo.id };
    SendPostRequest(
      "http://ecvat.online/back/public/api/add-vacancy",
      vacancyId
    ).then((data) => {
      if (data === "Wrong pass") {
        Alert.error('Wrong inputs.All inputs are required.', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
        setApplied(aplly);
      } else {
        Alert.success('Vacancy added!.', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
        setApplied(aplly);
      }
    });
  };
  return (
    <>
      <div className="info-box-container vacancy-box">
        <div className="box-main">
          <div className="vacancy-company-logo-name">
            {props.noImage?"":<div
              onClick={() => setOpen(!open)}
              className="vacancy-company-logo "
              style={logoUrl?logoUrl:{}}
            ></div>}
            
            <div className="vacancy-company-name">
              <div onClick={() => setOpen(!open)} className="vac-name">
                {props.vacancyInfo.title}
              </div>
              {props.vacancyInfo.company && (
                <Link to="/person/CompanyPage_Wiew">
                  <div
                    onClick={() => {
                      console.log(props.vacancyInfo.company.user_id);
                      window.localStorage.setItem(
                        "userWiewId",
                        props.vacancyInfo.company.user_id
                      );
                    }}
                    className="comp-name"
                  >
                    {props.vacancyInfo.company.name}
                  </div>
                </Link>
              )}
              {!props.vacancyInfo.company && (
                <div className="vacansy-control-btn see-apps-btn">
                  Applications(15)
                </div>
              )}
            </div>
          </div>

          <div className="date-level">
            <div className="vac-date">
              {props.vacancyInfo.deadline.slice(0, 10)}
            </div>
            <div className="vac-level">{props.vacancyInfo.position}</div>
          </div>

          <div className="see-vac-button-container">
            <div
              onClick={() => addToVacancy(true)}
              className={applied ? "dn" : "see-vac-button apply-button"}
            >
              Apply online
            </div>
            <div
              className={
                applied ? "applied-check-icon" : "applied-check-icon dn"
              }
            >
              <img src={require("../../../img/check.svg")} alt="applied" />
            </div>

            <div onClick={() => setOpen(!open)} className="see-vac-button">
              View more
            </div>
          </div>
        </div>
        <div
          className={
            open ? "vacancy-info-dropdown" : "vacancy-info-dropdown null-height"
          }
        >
          <div className="vacancy-description">
            <div className="vac-title-item">Job description</div>
            <div
              className={
                open
                  ? "vacancy-desc-container"
                  : "vacancy-desc-container null-height"
              }
            >
              {props.vacancyInfo.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
