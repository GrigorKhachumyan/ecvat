import React from "react";
import "../tools.css";
import {CardBody,CardText,Card, CardTitle} from 'reactstrap';

function ExperianceBoard(props) {
  return (
    <div className="ExperianceBoard">
      {props.experiance.map((value, index) => {

        return (
          <Card key={index}>
          <CardBody>
          <div
            className="Delete"
            onClick={(e) => props.changeState(e, "experiance", index)}
          >
          <img src={require("../../../../../img/remove.svg")}/>
          </div>
          <CardTitle>{value.expProf}</CardTitle>
          <CardText>{value.expPlace} </CardText>
          <CardText>{value.expStart} - {value.expEnd}</CardText>
          </CardBody>
        </Card>
        );
      })}
    </div>
  );
}

export default ExperianceBoard;
