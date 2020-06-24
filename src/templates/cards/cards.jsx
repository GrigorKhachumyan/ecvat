import React from "react";
import Card from "./card";
import "../../css/cards.css";

export default function Cards(props){
    let texts=[
        "Choose one of our many CV templates.",
        "Insert your personal information to CV template.",
        "Dwnload your CV without registration.",
    ]
    if(!props.forUser){
        return(
            <>
            <div className="cards-container noreg">
            <div className="section-title">
            Create your CV
            </div>
            <div className="card-items">
                <Card icon="card1" title="Choose template" text={texts[0]}/>
                <Card icon="card2" title="Insert info" text={texts[1]}/>
                <Card icon="card3" title="Download PDF" text={texts[2]}/>
            </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <div className="cards-container reg">
            <div className="section-title">
            Find work posts from companies
            </div>
            <div className="card-items">
                <Card icon="card1" title="Choose template" text={texts[0]}/>
                <Card icon="card2" title="Insert info" text={texts[1]}/>
                <Card icon="card3" title="Download PDF" text={texts[2]}/>
                <Card icon="card3" title="Download PDF" text={texts[2]}/>
            </div>
            </div>
            </>
        )  
    }
}