import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CompanyMenu(props) {
  const menuStyle = {
    height: document.body.offsetHeight-100 + "px",
  };
  return (
    <div className="user-menu-main" style={menuStyle}>
      <ul className={"user-menu-container"}>
        <li className="user-menu-item">
          <Link to="/company/search_persons">Persons</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/company/manage_profile">Manage profile</Link>
        </li>
      </ul>
    </div>
  );
}
