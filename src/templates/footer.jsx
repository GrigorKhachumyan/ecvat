import React from "react";
import logo from "../img/log.svg"

export default function Footer(){

    return(
        <footer>
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
            <div className="text">
            eCVat 2020
            </div>
        </footer>
    )
}