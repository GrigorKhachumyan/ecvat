import React from "react";
import logo from "../../img/log.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="text">eCVat 2020</div>
    </footer>
  );
}
