import React from "react";
import "../tools.css";
import {CardBody,CardText,Card, CardTitle} from 'reactstrap';


function EducationBoard(props) {
  return (
    <div className="EducationBoard">
      {props.education.map((value, index) => {
        return (
          <Card key={index}>
            <CardBody>
            <div
              className="Delete"
              onClick={(e) => props.changeState(e, "education", index)}
            >
            <img src={require("../../../../../img/remove.svg")}/>
            </div>
            <CardTitle>{value.eduProf}</CardTitle>
            <CardText>{value.eduPlace} </CardText>
            <CardText>{value.eduStart} - {value.eduEnd}</CardText>
            </CardBody>
          </Card>
         
        );
      })}
    </div>
  );
}

export default EducationBoard;
