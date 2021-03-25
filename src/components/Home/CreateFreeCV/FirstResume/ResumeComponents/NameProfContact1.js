import React from "react";
import "./ResumeBody.css";
import Contact from "./Contact";
import NameSurname1 from "./NameSurname1";
import Profession from "./Profession";

function NameProfContact1(props) {
  return (
    <div className="NameProfContact1">
      <NameSurname1 name={props.name} surname={props.surname} />
      <Profession profession={props.profession} />
      <Contact adress={props.adress} phone={props.phone} mail={props.mail} />
    </div>
  );
}

export default NameProfContact1;
