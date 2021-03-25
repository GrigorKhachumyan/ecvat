import React from "react";
import Resume from "../../Home/CreateFreeCV/FirstResume/FirstResume1";

export default function ResumePopup(props) {
  return (
    <>
      <div className="resume-popup-container">
        <div className="resume-popup-main">
          <span>RESUME</span>
          <div className="popup-close-btn">
            <img src={require("../../../img/close.svg")} alt="close" />
          </div>
        </div>
      </div>
    </>
  );
}
