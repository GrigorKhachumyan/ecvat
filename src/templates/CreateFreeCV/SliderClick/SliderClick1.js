import React from "react";
import "./SliderClick.css";

function SliderClick1(props) {
  return (
    <div className="SliderClick">
      <div
        className={
          props.clickedIndex === "1" ? "ClickedType1Clicked" : "ClickedType1"
        }
        onClick={(e) => props.changeState(e, "clicked", "1", 2)}
      ></div>
      <div
        className={
          props.clickedIndex === "2" ? "ClickedType1Clicked" : "ClickedType1"
        }
        onClick={(e) => props.changeState(e, "clicked", "2", 2)}
      ></div>
      <div
        className={
          props.clickedIndex === "3" ? "ClickedType1Clicked" : "ClickedType1"
        }
        onClick={(e) => props.changeState(e, "clicked", "3", 2)}
      ></div>
      <div
        className={
          props.clickedIndex === "4" ? "ClickedType1Clicked" : "ClickedType1"
        }
        onClick={(e) => props.changeState(e, "clicked", "4", 2)}
      ></div>
    </div>
  );
}

export default SliderClick1;
