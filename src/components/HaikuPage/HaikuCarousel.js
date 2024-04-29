import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Haiku from "./Haiku";
import "./Carousel.css";

export default function HaikuCarousel({ haikus }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === haikus.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? haikus.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {haikus.map((item, idx) => {
        return (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          >
            <Haiku haiku={item} />
            
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      {/* <span className="indicators">
        {haikus.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span> */}
    </div>
  );
};
