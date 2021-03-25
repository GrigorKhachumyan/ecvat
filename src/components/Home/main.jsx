import React, { useState, createContext } from "react";
import Header from "./HomeComponents/header";

import Slider from "./HomeComponents/slider";
import Cards from "../cards/cards";
import Footer from "../ReuseableComponents/footer";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import "../../css/main.css";




export default function Main(props) {
  const [page, setPage] = useState("main");
 
  return (
    <>
    <Alert/>
      <Header setToken={props.setToken} />
      <Slider />
      <Cards forUser={false} />
      <Cards forUser={true} />

      <Footer />
    </>
  );
}
