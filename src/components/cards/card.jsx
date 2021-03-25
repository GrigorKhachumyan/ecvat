import React from "react";

export default function Card(props){
    return(
        <div className="card-item">
            <div className="card-item-icon">
                <img src={require("../../img/"+ props.icon + ".svg")} alt="icon"/>
            </div>
            <div className="card-item-title">
                {props.title}
            </div>
            <div className="card-item-text">
                {props.text}
            </div>
        </div>
    )
}