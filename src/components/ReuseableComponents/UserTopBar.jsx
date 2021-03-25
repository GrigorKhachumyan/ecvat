import React from "react";
import logo from "../../img/log.svg";
import { Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { useDispatch, useSelector } from "react-redux";

export default function UserTopBar(props) {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const user_type = window.localStorage.getItem("user_type");
  const ClickedBtn = () => {
    window.localStorage.clear();
    window.localStorage.setItem("user_type", "guest");
    dispatch({ type: "login", payload: { userType: "guest", userId: "" } });
  };

  return (
    <>
      <div className={"main-top-bar all-pages-top-bar"}>
        <Link to={`/${user_type}`}>
          <div className="logo">
            <img src={logo} alt="eCVat" />
          </div>
        </Link>
        <Link to="/home">
          <div className="sign-container">
            <div className="sign-button sign-in" onClick={() => ClickedBtn()}>
              Sign out
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
