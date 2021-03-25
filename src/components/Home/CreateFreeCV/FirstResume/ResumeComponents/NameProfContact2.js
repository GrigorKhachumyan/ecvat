import React from "react";
import "./ResumeBody.css";
import Contact from "./Contact";
import NameSurname2 from "./NameSurname2";
import Profession from "./Profession";

function NameProfContact2(props) {
  return (
    <div className="NameProfContact2">
      <NameSurname2 name={props.name} surname={props.surname} />
      <Profession profession={props.profession} />
      <Contact adress={props.adress} phone={props.phone} mail={props.mail} />
    </div>
  );
}

export default NameProfContact2;
