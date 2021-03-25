import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./components/Home/Home";
import Person from "./components/User_Person/Person";
import Company from "./components/User_Company/Company";

const history = createBrowserHistory();

export default function Navigation() {
  const userType = useSelector((state) => state.userType);

  const [clickedTamplate, setClickedTamplate] = useState(["SecondResume", 1]);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!window.localStorage.user_type) {
      window.localStorage.setItem("user_type", "guest");
    }
  }, []);

  function handleScroll(event) {
    setScroll(event.target.scrollTop);
  }
  const changeClickedTamplate = (e, clickedResume) => {
    let stateObj = [...clickedTamplate];
    if (clickedResume !== stateObj[0]) {
      stateObj[0] = clickedResume;
      stateObj[1] = 1;
      setClickedTamplate(stateObj);
    }
  };

  const changeClickedTamplateType = (e, upOrDown) => {
    let stateObj = [...clickedTamplate];
    if (stateObj[0] === "SecondResume") {
      if (stateObj[1] === 1) {
        stateObj[1] = 2;
      } else stateObj[1] = 1;
    } else {
      if (upOrDown === "UP") {
        if (stateObj[1] === 4) {
          stateObj[1] = 1;
        } else {
          stateObj[1] += 1;
        }
      } else {
        if (stateObj[1] === 1) {
          stateObj[1] = 4;
        } else {
          stateObj[1] -= 1;
        }
      }
    }
    setClickedTamplate(stateObj);
  };

  return (
    <>
      <BrowserRouter history={history}>
        {window.localStorage.user_type === "guest" && (
          <Switch>
            <Route path="/home">
              <Home
                clickedResume={clickedTamplate}
                changeClickedTamplate={changeClickedTamplate}
                changeClickedTamplateType={changeClickedTamplateType}
              ></Home>
            </Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        )}

        {window.localStorage.user_type === "person" && (
          <Switch>
            <Route path="/person">
              <Person
                clickedResume={clickedTamplate}
                changeClickedTamplate={changeClickedTamplate}
                changeClickedTamplateType={changeClickedTamplateType}
              ></Person>
            </Route>
            <Redirect to="/person"></Redirect>
          </Switch>
        )}

        {window.localStorage.user_type === "company" && (
          <Switch>
            <Route path="/company">
              <Company></Company>
            </Route>
            <Redirect to="/company"></Redirect>
          </Switch>
        )}
      </BrowserRouter>
    </>
  );
}
