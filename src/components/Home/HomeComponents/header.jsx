import React from "react";
import MainTopBar from "../../header/top-bar-main";
import "../../../css/header.css";
import HeaderInfo from "./header-info";

export default function Header(props) {
  return (
    <header>
      <MainTopBar page="main" setToken={props.setToken} />
      <HeaderInfo />
    </header>
  );
}
