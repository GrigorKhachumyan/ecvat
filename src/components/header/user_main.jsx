import React from "react";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export default function UserMain(props){
    return (
        <>
        <Alert/>
        <div className="user-main-info-container">
            <div className="user-left">
                <div className="user-avatar">
                    <img src={require("../../img/user.svg")} alt="uimg"/>
                </div>
                <div className="user-name-prof">
                    <div className="user-name">Shahen Grigoryan</div>
                    <div className="user-prof">Front-End developer</div>
                </div>
                </div>
                <div className="user-right">
                    <div className="about-title">
                        About
                    </div>
                    <div className="about-text">
                    It is a long established fact that a 
                    reader will be distracted by the readable 
                    content of a page when looking at its 
                    layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution 
                    of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors 
                    now use Lorem Ipsum as their default model text, and 
                    a search for 'lorem ipsum' will uncover many web sites 
                    still in their infancy. Various versions have evolved 
                    over the years, sometimes by accident, sometimes on 
                    purpose (injected humour and the like).
                    </div>
                </div>
            </div>
        
        </>
    )
}