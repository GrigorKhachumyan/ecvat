import React from "react";
import "./ResumeBody.css";

function Contact(props) {
  return (
    <div className="Contact">
      <div >Phone:{props.phone}</div>
      <div style={{ marginLeft: "0.2vw" }}>M:{props.mail}</div>
      <div style={{ marginLeft: "0.2vw" }}>A:{props.adress}</div>
    </div>
  );
}

export default Contact;
