import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "50vw",
          height: "30vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      
        <div
          className={"SliderDivSecond"}
          onClick={(e) => this.props.changeClickedTamplate(e, "SecondResume")}
        ></div>
      </div>
    );
  }
}

export default Slider;
