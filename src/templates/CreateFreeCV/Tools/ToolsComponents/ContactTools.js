import React from "react";
import "./ToolsCSS/ToolsClick.css";

function ContactTools(props) {
  return (
    <div className="ToolsClick">
      <div>
        <input
          className="Input1"
          placeholder="...Name"
          onChange={(e) => props.changeState(e, "contact", "name")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...Surname"
          onChange={(e) => props.changeState(e, "contact", "surname")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...Profession"
          onChange={(e) => props.changeState(e, "contact", "profession")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...Adress"
          onChange={(e) => props.changeState(e, "contact", "adress")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...Phone"
          onChange={(e) => props.changeState(e, "contact", "phone")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...Mail"
          onChange={(e) => props.changeState(e, "contact", "mail")}
        />
      </div>
      <div>
        <input
          className="Input1"
          placeholder="...BirdthDate"
          onChange={(e) => props.changeState(e, "contact", "birdthDate")}
        />
      </div>
    </div>
  );
}

export default ContactTools;
