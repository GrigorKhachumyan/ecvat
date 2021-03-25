import React from "react";
import "./SecondResumeBody.css";
import ContactSecond from "./ContactSecond";
import NameSurnameSecond from "./NameSurnameSecond";
import ProfessionSecond from "./ProfessionSecond";

function NameProfContactSecond(props) {
  return (
    <div className="NameProfContactSecond">
      <div>
        <NameSurnameSecond name={props.name} surname={props.surname} />
        <ProfessionSecond profession={props.profession} />
      </div>
      <ContactSecond
        adress={props.adress}
        phone={props.phone}
        mail={props.mail}
      />
    </div>
  );
}

export default NameProfContactSecond;
