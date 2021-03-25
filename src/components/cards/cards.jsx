import React from "react";
import Card from "./card";
import "../../css/main.css";


export default function Cards(props){
    let texts=[
        "Choose one of our many CV templates.",
        "Insert your personal information to CV template.",
        "Dwnload your CV without registration.",
        "It's free аnd gives you more features",
        "Find vacancies and job opportuinities",
        "Send your CV to companies by one click"

    ]
    if(!props.forUser){
        return(
            <>
            <div className="cards-container noreg">
            <div className="section-title">
            What can I do as a guest?
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
            What can I do as а user?
            </div>
            <div className="card-items">
                <Card icon="card6" title="Sign up" text={texts[3]}/>
                <Card icon="card2" title="Insert info" text={texts[1]}/>
                <Card icon="card7" title="Find vacancies" text={texts[4]}/>
                <Card icon="card8" title="Send your CV" text={texts[5]}/>
            </div>
            </div>
            </>
        )  
    }
}