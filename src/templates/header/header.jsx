import React from "react";
import MainTopBar from "./top-bar-main";
import "../../css/header.css"
import HeaderInfo from "./header-info";


export default function Header(props){


    return(
       
     <header>
         <MainTopBar/>
         <HeaderInfo/>
     </header>
       
    )
}