import React from "react";
import "../tools.css";
import {CardBody,CardText,Card, CardTitle} from 'reactstrap';


function LanguagesBoard(props) {
  return (
    <div className="LanguagesBoard">
      {props.languages.map((value, index) => {
        for (let key in value) {
          return (
            <Card key={index}>
            <CardBody>
            <div
              className="Delete"
              onClick={(e) => props.changeState(e, "languages", index)}
            >
            <img src={require("../../../../../img/remove.svg")}/>
            </div>
            <CardTitle>{key}</CardTitle>
            <CardText><div className="level-item-cont">
              <div className="level-item" style={{width:`${value[key]?value[key]:50}%`}}></div>
              </div>
               </CardText>
            </CardBody>
          </Card>
          );
        }
      })}
    </div>
  );
}

export default LanguagesBoard;
