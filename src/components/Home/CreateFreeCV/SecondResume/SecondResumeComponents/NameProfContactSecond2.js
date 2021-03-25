import React from "react";
import "./SecondResumeBody.css";
import ContactSecond from "./ContactSecond";
import NameSurnameSecond2 from "./NameSurnameSecond2";
import ProfessionSecond from "./ProfessionSecond";
import PhotoSecond from "./PhotoSecond";

function NameProfContactSecond2(props) {
  return (
    <div className="NameProfContactSecond">
      <div style={{ display: "flex", width: "29vw" }}>
        <div>
          <NameSurnameSecond2 name={props.name} surname={props.surname} />
          <ProfessionSecond profession={props.profession} />
        </div>
        <PhotoSecond photo={props.photo} />
      </div>
      <ContactSecond
        adress={props.adress}
        phone={props.phone}
        mail={props.mail}
      />
    </div>
  );
}

export default NameProfContactSecond2;
