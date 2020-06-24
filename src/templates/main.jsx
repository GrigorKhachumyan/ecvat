import React, {useState, createContext} from "react";
import Header from "./header/header";
import "../css/main.css";
import Slider from "./slider";
import Cards from "./cards/cards";
import Footer from "./footer";
import CCV from "./CreateFreeCV/CCV/CCV";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


export default function Main () {
    const [page,setPage]=useState("main");

   

    return(
        <>
        <Header/>
        <Slider/>
        <Cards forUser={false}/>
        <Cards forUser={true}/>
        <Footer/>

        </>
    )



}

