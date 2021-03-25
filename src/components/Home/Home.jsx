import React from "react";
import Main from "./main";
import CCV from "./CreateFreeCV/CCV/CCV";
import { Route, Switch, Redirect } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Main setToken={props.setToken}></Main>
        </Route>
        <Route exact path="/home/create-cv">
          <CCV
            setToken={props.setToken}
            clickedResume={props.clickedResume}
            changeClickedTamplate={props.changeClickedTamplate}
            changeClickedTamplateType={props.changeClickedTamplateType}
          ></CCV>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
