import React from "react";
import "../tools.css";

function ContactTools(props) {
  return (
    <div className="ToolsClick">
      <div>
        <input
          value={props.contactInputs.name}
          className="Input1"
          placeholder="Name"
          onChange={(e) => props.changeState(e, "contact", "name")}
        />
      </div>
      <div>
        <input
          value={props.contactInputs.surname}
          className="Input1"
          placeholder="Surname"
          onChange={(e) => props.changeState(e, "contact", "surname")}
        />
      </div>
      <div>
        <input
          value={props.contactInputs.profession}
          className="Input1"
          placeholder="Occupation(UI UX designer, software developer...)"
          onChange={(e) => props.changeState(e, "contact", "profession")}
        />
      </div>
      <div>
        <input
          value={props.contactInputs.adress}
          className="Input1"
          placeholder="Adress"
          onChange={(e) => props.changeState(e, "contact", "adress")}
        />
      </div>
      <div>
        <input
          value={props.contactInputs.phone}
          className="Input1"
          placeholder="Phone"
          onChange={(e) => props.changeState(e, "contact", "phone")}
        />
      </div>
      <div>
        <input
          value={props.contactInputs.mail}
          className="Input1"
          placeholder="Email"
          onChange={(e) => props.changeState(e, "contact", "mail")}
        />
      </div>
    </div>
  );
}

export default ContactTools;
