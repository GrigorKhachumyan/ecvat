import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {Button,Input} from "reactstrap";
import { Link } from "react-router-dom";

export default function ContactInputs(props) {
  let userInfo = useSelector((state) => state.userInfo);
  let personContactInfo =
    userInfo &&
    userInfo.user_info &&
    window.localStorage.getItem("user_type") === "person"
      ? {
          name: userInfo.user_info.name ? userInfo.user_info.name : "",
          sur_name: userInfo.user_info.sur_name
            ? userInfo.user_info.sur_name
            : "",
          specialization: userInfo.user_info.specialization
            ? userInfo.user_info.specialization
            : "",
          address: userInfo.user_info.address ? userInfo.user_info.address : "",
          phone_number: userInfo.user_info.phone_number
            ? userInfo.user_info.phone_number
            : "",
          birth_date: userInfo.user_info.birth_date
            ? userInfo.user_info.birth_date
            : "",
          info: userInfo.user_info.info ? userInfo.user_info.info : "",
        }
      : {};
  useEffect(() => {
    if (window.localStorage.getItem("user_type") === "person") {
      props.setInfoPerson(personContactInfo);
    }
  }, [userInfo]);
  return (
    <>
      <div className="manage-inputs-container">
        <div className="manage-inputs-title">Contact Information</div>
        <div className="manage-inputs-main">
          <div className="manage-inputs-side">
            <div className="manage-inputs-box">
              <label htmlFor="inp_name">Name</label>
              <input
                type="text"
                id="inp_name"
                placeholder="Vardan"
                value={props.contact.name}
                onChange={(e) => props.manageChange(e, "name")}
              />
            </div>
            {window.localStorage.getItem("user_type") === "person" && (
              <>
                <div className="manage-inputs-box">
                  <label htmlFor="inp_surname">Surname</label>
                  <input
                    type="text"
                    id="inp_surname"
                    placeholder="Vardanyan"
                    value={props.contact.sur_name}
                    onChange={(e) => props.manageChange(e, "sur_name")}
                  />
                </div>
                <div className="manage-inputs-box">
                  <label htmlFor="inp_number">phone_number</label>
                  <input
                    type="text"
                    id="inp_number"
                    placeholder="099-99-99-99"
                    value={props.contact.phone_number}
                    onChange={(e) => props.manageChange(e, "phone_number")}
                  />
                </div>
              </>
            )}
            <div className="manage-inputs-box">
              <label htmlFor="inp_specialization">Specialization</label>
              <input
                type="text"
                id="inp_specializationn"
                placeholder="specialization"
                value={props.contact.specialization}
                onChange={(e) => props.manageChange(e, "specialization")}
              />
            </div>
          </div>

          <div className="manage-inputs-side">
            <div className="manage-inputs-box">
              <label htmlFor="inp_adress">Adress</label>
              <input
                type="text"
                id="inp_adress"
                placeholder="Armenia, Yerevan, Mashtots st. 42"
                value={props.contact.address}
                onChange={(e) => props.manageChange(e, "address")}
              />
            </div>
            <div className="manage-inputs-box">
              <label htmlFor="inp_about">Info</label>
              <textarea
                type="text"
                id="inp_about"
                placeholder="Info about"
                value={props.contact.info}
                onChange={(e) => props.manageChange(e, "info")}
              ></textarea>
            </div>
            {window.localStorage.getItem("user_type") === "person" && (
              <div className="manage-inputs-box">
                <label htmlFor="inp_birth">Date of birth</label>
                <input
                  type="date"
                  id="inp_birth"
                  placeholder="1998-04-06"
                  value={props.contact.birth_date}
                  onChange={(e) => props.manageChange(e, "birth_date")}
                />
              </div>
            )}

            <div className="manage-inputs-box">
              <label htmlFor="inp_photo">Upload a photo</label>
              
              <input
                type="file"
                id="inp_photo"
                onChange={(e) => props.manageChange(e, "logo")}
              />
            </div>
           
          </div>
        </div>
        {!props.userInfo && (
          localStorage.getItem("user_type")=="person"?
        <Button color="primary"
         className="save-change-button"
          onClick={(e) => props.manageSaveRequest(e)}
        >
          Save contact info
        </Button>:
        localStorage.getItem("user_type")=="company"?
        <Link to="/company">
        <Button color="primary"
         className="save-change-button"
          onClick={(e) => props.manageSaveRequest(e)}
        >
          Save contact info
        </Button>
        </Link>:""
        
      )}
      {props.userInfo && (
        <Button color="primary"
         className="save-change-button"
          onClick={(e) => props.manageChangeRequest(e)}
        >
          Change contact info
        </Button>
      )}
      </div>
      
    </>
  );
}
