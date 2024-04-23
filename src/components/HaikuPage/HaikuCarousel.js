import React, { useState } from 'react';
import Haiku from './Haiku';
const Carousel = ({ haikus }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [haikus]

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % items?.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + items?.length) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide} disabled={currentIndex === 0}>
        Prev
      </button>
      <div className="carousel-content">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            }`}
          >
               <Haiku />
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={goToNextSlide}
        disabled={currentIndex === items.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
