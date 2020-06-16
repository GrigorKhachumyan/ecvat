import React from "react";
import Carousel from 'react-spring-3d-carousel';

export default function Slider(){
    let slides=[{
        key: 1,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 2,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 3,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 4,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 5,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 6,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 7,
        content: <img src={require("../img/cv.png")} alt="1" />
      },
      {
        key: 8,
        content: <img src={require("../img/cv.png")} alt="1" />
      }
    ];
        
    

    return(
        <div className="slider-container">

            <Carousel slides={slides} goToSlideDelay={200}/>
        </div>
    )


}