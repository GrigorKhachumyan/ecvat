import React from "react";
import logo from "../../img/log.svg"

export default function MainTopBar(){
    return(
        <>
         <div className="main-top-bar">
             <div className="logo">
                 <img src={logo} alt="eCVat"/>
             </div>
             <div className="sign-container">
                 <div className="sign-button sign-in">
                     Sign in
                 </div>
                 <div className="sign-button sign-up">
                     Sign up
                 </div>
             </div>
         </div>
        </>
    )
}