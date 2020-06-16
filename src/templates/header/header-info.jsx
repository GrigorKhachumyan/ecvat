import React from "react";
import doc from "../../img/docs.svg"

export default function HeaderInfo(){

    return(
        <div className="header-info-container">
            <div className="header-info-left header-info">
                <div className="header-title">
                Build the resume that lands you jobs
                </div>
                <div className="header-sec-text">
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. 
                </div>
                <div className="create-button">
                Create my CV
                </div>
            </div>
            <div className="header-info-right header-info">
                <img src={doc} alt="doc"/>
            </div>
        </div>
    )
}