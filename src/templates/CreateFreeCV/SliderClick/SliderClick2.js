import React from "react";
import "./SliderClick.css";

function SliderClick2(props) {
  return (
    <div className="SliderClick">
      <div
        className={
          props.clickedIndex === "1" ? "ClickedType2Clicked" : "ClickedType2"
        }
        onClick={(e) => props.changeState(e, "clicked", "1", 2)}
      ></div>
      <div
        className={
          props.clickedIndex === "2" ? "ClickedType2Clicked" : "ClickedType2"
        }
        onClick={(e) => props.changeState(e, "clicked", "2", 2)}
      ></div>
    </div>
  );
}

export default SliderClick2;
