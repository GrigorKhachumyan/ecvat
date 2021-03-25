import React, { useEffect, useState } from "react";
import { SendGetRequest } from "../../RequestHelpers";
import WiewPerson from "./CompanyComponents/wiew_person";
import CompanyMenu from "./CompanyComponents/CompanyMenu";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import SearchHeader from "../User_Person/PersonComponents/search_header";

export default function CompanyPersons(props) {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    SendGetRequest(`http://ecvat.online/back/public/api/persons`).then(
      (data) => {
        let dataObj = { ...data };
        console.log(dataObj);
        setPersons(dataObj.persons);
      }
    );
  }, []);
  return (
    <>
      <CompanyMenu />
      <UserTopBar />
      <SearchHeader />
      {persons.length &&
        persons.map((value, index) => {
          return <WiewPerson key={index} personInfo={value}></WiewPerson>;
        })}
    </>
  );
}
