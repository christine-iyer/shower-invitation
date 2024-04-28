import React, { useState } from 'react'



// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// import "./HaikuCarousel.css";

export default function HaikuCarousel ({ haikus }){
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === haikus.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? haikus.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow arrow-left" />
      {haikus.map((item, idx) => {
        return (
          <div
            haiku={item}
          
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })} 
    <button
        onClick={console.log("Chicked")}  
        className="arrow arrow-right"
        style={{ backgroundColor:'blue', height:"45%"ç, padding: "5px" , margin: "5px" }}
      > Hi</button>
      <span className="indicators">
        {haikus.map((_id, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => console.log('Hi')}
            ></button>
          );
        })}
      </span>
    </div>
  );
};