import React, { useEffect } from "react";
import PersonPage from "./PersonPage";
import { Redirect, Route, Switch } from "react-router-dom";
import PersonManage from "./person_manage";
import SearchPage from "./search_page";
import CCV from "../Home/CreateFreeCV/CCV/CCV";
import Companies from "./Person_Companies";
import { SendGetRequest } from "../../RequestHelpers";
import CompanyPageView from "./CompanyPage_View";
import { useDispatch, useSelector } from "react-redux";

export default function Person(props) {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <>
      <Switch>
        <Route exact path="/person">
          <PersonPage></PersonPage>
        </Route>
        <Route exact path="/person/companies">
          <Companies></Companies>
        </Route>
        <Route exact path="/person/manage_profile">
          <PersonManage></PersonManage>
        </Route>
        <Route exact path="/person/search">
          <SearchPage></SearchPage>
        </Route>
        <Route exact path="/person/get_CV">
          <CCV
            userInfo={userInfo}
            clickedResume={props.clickedResume}
            changeClickedTamplate={props.changeClickedTamplate}
            changeClickedTamplateType={props.changeClickedTamplateType}
          ></CCV>
        </Route>
        <Route exact path="/person/CompanyPage_Wiew">
          <CompanyPageView></CompanyPageView>
        </Route>
        <Redirect to="/person" />
      </Switch>
    </>
  );
}
