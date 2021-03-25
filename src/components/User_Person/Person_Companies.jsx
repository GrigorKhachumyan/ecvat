import React, { useEffect } from "react";
import PersonMenu from "./PersonComponents/PersonMenu";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import UserHeader from "../header/user_header";
import Company from "./PersonComponents/view_company";
import { useDispatch, useSelector } from "react-redux";
import { SendGetRequest } from "../../RequestHelpers";

export default function Companies(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    SendGetRequest("http://ecvat.online/back/public/api/companies").then(
      (data) => {
        let dataObj = {...data}
        dispatch({ type: "companiesP", payload: dataObj });
      }
    );
  }, []);
  const companies = useSelector((state) => state.companiesP);
  return (
    <>
      <PersonMenu />
      <UserTopBar />
      <UserHeader />
      {companies &&
        companies.map((item, index) => {
          return <Company compInfo={item} key={index}></Company>;
        })}
    </>
  );
}
