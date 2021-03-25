import React from "react";
import CompanyPage from "./CompanyPage";
import { Switch, Route, Redirect } from "react-router-dom";
import CompanyManage from "./CompanyManage";
import CompanyApps from "./company_apps";
import PersonPageWiew from "./PersonPage_Wiew";
import CompanyPersons from "./Company_Persons";

export default function Company(props) {
  return (
    <>
      <Switch>
        <Route exact path="/company">
          <CompanyPage setLoged={props.setLoged}></CompanyPage>
        </Route>
        <Route exact path="/company/manage_profile">
          <CompanyManage setLoged={props.setLoged}></CompanyManage>
        </Route>
        <Route exact path="/company/applications">
          <CompanyApps />
        </Route>
        <Route exact path="/company/person_page_wiew">
          <PersonPageWiew></PersonPageWiew>
        </Route>
        <Route>
          <CompanyPersons exact path="/company/search_persons"></CompanyPersons>
        </Route>
        <Redirect to="/company" />
      </Switch>
    </>
  );
}
