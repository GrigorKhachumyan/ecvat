import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PersonMenu(props) {
  const menuStyle = {
    height:document.body.offsetHeight-100+"px",
  };
  return (
    <div className="user-menu-main" style={menuStyle}>
      <ul className={"user-menu-container"}>
        <li className="user-menu-item">
          <Link to="/person/search">Find vacansy</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/person/companies">Companies</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/person/get_CV">Get CV</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/person/manage_profile">Manage profile</Link>
        </li>
      </ul>
    </div>
  );
}
