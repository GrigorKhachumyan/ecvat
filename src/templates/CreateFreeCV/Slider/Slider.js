import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          marginTop: "8vw",
          marginLeft: "2vw",
          width: "12vw",
          height: "31vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="SliderDivFirst"
          onClick={(e) =>
            this.props.changeState(e, "clicked", "FirstResume", 1)
          }
        ></div>
        <div
          className={"SliderDivSecond"}
          onClick={(e) =>
            this.props.changeState(e, "clicked", "SecondResume", 1)
          }
        ></div>
      </div>
    );
  }
}

export default Slider;
