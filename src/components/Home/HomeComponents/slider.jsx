import React,{useState,useEffect} from "react";
import Carousel from "react-spring-3d-carousel";

export default function Slider() {
  const [slide,setSlide]=useState(0);
  
  let slides = [
    {
      key: 1,
      content:<div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div> ,
    },
    {
      key: 2,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 3,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 4,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 5,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 6,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 7,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
    {
      key: 8,
      content: <div className="slider-slide"><img src={require("../../../img/cv.png")} alt="1" /></div>,
    },
  ];

  return (
    
    <div className="slider-container">
      <div className="slide-prev-btn" onClick={()=>slide!=0?setSlide(slide-1):setSlide(slides.length-1)}>
      <img src={require("../../../img/prev.svg")} alt="-"/>
    </div>
      <Carousel goToSlide={slide} slides={slides} goToSlideDelay={200} offsetRadius={3} animationConfig={{tension: 120, friction: 14}} />
   <div className="slide-next-btn" onClick={()=>slide!=slides.length-1?setSlide(slide+1):setSlide(0)} >
   <img src={require("../../../img/next.svg")} alt="+"/>
   </div>
    </div>
    
  );
}
