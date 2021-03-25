import React from "react";
import MainTopBar from "../header/top-bar-main";
import UserMenu from "../header/user_menu";
import Footer from "./footer";

export default function MainWrapper(props) {
  return (
    <>
      <MainTopBar />
      <UserMenu />
      {props.children}
      <Footer />
    </>
  );
}
