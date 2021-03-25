import React from "react";
import "../tools.css";
import {CardBody,CardText,Card, CardTitle} from 'reactstrap';


function SkillsBoard(props) {
  return (
    <div className="SkillsBoard">
      {props.skills.map((value, index) => {
        for (let key in value) {
          return (
            <Card key={index}>
            <CardBody>
            <div
              className="Delete"
              onClick={(e) => props.changeState(e, "skills", index)}
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

export default SkillsBoard;
