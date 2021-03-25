import React from "react";
import logo from "../../img/log.svg";
import { Link } from "react-router-dom";
import Reg from "../Home/HomeComponents/reg_popup";
import Login from "../Home/HomeComponents/login_popup";
import { useState } from "react";

export default function MainTopBar(props) {
  const [clickedSignInOrUp, setClickedSignInOrUp] = useState("");

  const ClickedBtn = (Btn) => {
    setClickedSignInOrUp(Btn);
  };

  return (
    <>
      <div
        className={
          props.page == "main"
            ? "main-top-bar"
            : "main-top-bar all-pages-top-bar"
        }
      >
        <Link to="/home">
          <div className="logo">
            <img src={logo} alt="eCVat" />
          </div>
        </Link>
        <div className="sign-container">
          <div className="sign-button sign-in" onClick={() => ClickedBtn("IN")}>
            Sign in
          </div>
          <div className="sign-button sign-up" onClick={() => ClickedBtn("UP")}>
            Sign up
          </div>
        </div>
        {clickedSignInOrUp === "UP" && (
          <Reg ClickedBtn={ClickedBtn} setToken={props.setToken}></Reg>
        )}
        {clickedSignInOrUp === "IN" && (
          <Login ClickedBtn={ClickedBtn} setToken={props.setToken}></Login>
        )}
      </div>
    </>
  );
}
