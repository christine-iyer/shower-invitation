import React, { useState } from "react";


 const HaikuCarousel = ({ haikus }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === haikus.length - 1 ? 0 : slide + 1);
    console.log('clicked Next')
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? haikus.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <p onClick={prevSlide} className="arrow arrow-left" />
      {haikus?.map((item, idx) => {
        return (
          <p
            src={item.author}
            alt={item.one}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <p
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {haikus?.map((_id, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
              styles={{ color:'red'}}
          />
          );
        })}
      </span>
    </div>
  );
};

export default HaikuCarousel;
