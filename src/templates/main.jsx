import React from "react";
import Header from "./header/header";
import "../css/main.css";
import Slider from "./slider";
import Cards from "./cards/cards";
import Footer from "./footer";


export default function Main () {
    return(
        <>
        <Header/>
        <Slider/>
        <Cards isUser={false}/>
        <Cards isUser={true}/>
        <Footer/>
        </>
    )



}