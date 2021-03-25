import React, { useState, useEffect } from "react";
import UserTopBar from "../ReuseableComponents/UserTopBar";
import { SendGetRequest } from "../../RequestHelpers";
import Footer from "../ReuseableComponents/footer";
import PersonMenu from "./PersonComponents/PersonMenu";
import SearchHeader from "./PersonComponents/search_header";
import VacancyPostItem from "./PersonComponents/vacancy_post_item";

export default function SearchPage(props) {
  const [vacanciesInDeadline, setVacanciesInDeadline] = useState([]);
  useEffect(() => {
    let dataParse = [];
    SendGetRequest("http://ecvat.online/back/public/api/vacancy").then(
      (data) => {
        dataParse = [...data[1]];
        setVacanciesInDeadline(dataParse);
      }
    );
  }, []);
  return (
    <>
      <PersonMenu />
      <UserTopBar />
      <SearchHeader />
      <div className="page">
        <div className="vacancy-page-title">
          Vacancies({" "}
          <span className="posts-count">{vacanciesInDeadline.length}</span> )
        </div>
        {vacanciesInDeadline.map((value, index) => {
          return <VacancyPostItem key={index} vacancyInfo={value} />;
        })}
      </div>
      <Footer />
    </>
  );
}
