import React from "react";
import "./SecondResumeBody.css";

function ContactSecond(props) {
  return (
    <div className="ContactSecond">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.3vw",
          }}
        >
          <div className="IconPhone"></div>
          <div>{props.phone}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.3vw",
          }}
        >
          <div className="IconMail"></div>
          <div>{props.mail}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
          }}
        >
          <div className="IconAdress"></div>
          <div>{props.adress}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactSecond;
