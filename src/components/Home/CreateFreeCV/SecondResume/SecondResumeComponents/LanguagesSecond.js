import React from "react";
import "./SecondResumeBody.css";

function LanguagesSecond(props) {
  let CircleFunc = (value, a) => {
    if (value > a) {
      return "CircleX";
    } else {
      return "Circle";
    }
  };
  return (
    <div>
      <div className="LanguagesSecond">
        {props.languages.map((value, index) => {
          for (let key in value) {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: "0.3vw",
                }}
              >
                <div style={{ fontSize: "1vw", fontWeight: "700" }}>
                  {" "}
                  {key}{" "}
                </div>
                <div
                  style={{
                    marginLeft: "0.7vw",
                    marginTop: "0.2vw",
                    marginBottom: "0.4vw",
                    width: "10vw",
                    height: "1vw",
                    backgroundColor: "#f1f1f3",
                    display: "flex",
                  }}
                >
                  <div className={CircleFunc(value[key], 0)}></div>
                  <div className={CircleFunc(value[key], 20)}></div>
                  <div className={CircleFunc(value[key], 40)}></div>
                  <div className={CircleFunc(value[key], 60)}></div>
                  <div className={CircleFunc(value[key], 80)}></div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default LanguagesSecond;
