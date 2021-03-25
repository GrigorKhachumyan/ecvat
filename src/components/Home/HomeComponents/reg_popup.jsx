import React, { useState } from "react";
import "../../../css/popups.css";
import { SendPostRequest } from "../../../RequestHelpers";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { useDispatch, useSelector } from "react-redux";

export default function Reg(props) {
  const dispatch = useDispatch();
  const [signUpObj, setSignUpObj] = useState({
    type: "person",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const changeSignUpObj = (e, inputName) => {
    const signUpObjX = { ...signUpObj };
    signUpObjX[inputName] = e.target.value;
    setSignUpObj(signUpObjX);
  };

  return (
    <div className="popup-container">
      <div className="popup-main">
        <div className="popup-close-btn" onClick={() => props.ClickedBtn("")}>
          <img src={require("../../../img/close.svg")} alt="close" />
        </div>
        <div className="popup-title-conotainer">
          <span>Sign up</span>
        </div>
        <div className="popup-inputs-container">
          <select name="user_type" onChange={(e) => changeSignUpObj(e, "type")}>
            <option value="person">Person</option>
            <option value="company">Company</option>
          </select>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={(e) => changeSignUpObj(e, "email")}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            onChange={(e) => changeSignUpObj(e, "password")}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password repeat"
            onChange={(e) => changeSignUpObj(e, "password_confirmation")}
          />
        </div>
        <div
          className="popup-btn"
          onClick={(e) =>
            SendPostRequest(
              "http://ecvat.online/back/public/api/register",
              signUpObj
            ).then((data) => {
              if (data.token) {
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("user_type", data.user.type);
                window.localStorage.setItem("user_id", data.user.id);
                window.localStorage.removeItem("ccvState");
                let dataObj = data.user;
                dispatch({ type: "login", payload: dataObj });
              } else {
                Alert.error('Wrong inputs', {
                  position: 'top-right',
                  effect: 'slide',
                  timeout: 2000
              });
              }
            })
          }
        >
          Sign up
        </div>
      </div>
    </div>
  );
}
