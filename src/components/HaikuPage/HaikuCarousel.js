import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Haiku from "./Haiku";
import styles from './HaikuCarousel.module.scss';

export default function HaikuCarousel({ haikus, updateHaiku, deleteHaiku, likeHaiku }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === haikus.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? haikus.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Automatically change slides every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [slide]);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {/* Left Arrow */}
        <BsArrowLeftCircleFill onClick={prevSlide} className={styles.arrow} />

        {/* Slides */}
        {haikus.map((item, idx) => (
          <div
            key={idx}
            className={slide === idx ? styles.slide : styles.slideHidden}
          >
            <Haiku
              haiku={item}
              updateHaiku={updateHaiku}
              deleteHaiku={deleteHaiku}
              likeHaiku={likeHaiku}
            />
          </div>
        ))}

        {/* Right Arrow */}
        <BsArrowRightCircleFill onClick={nextSlide} className={styles.arrow} />

        {/* Indicators */}
        <div className={styles.indicators}>
          {haikus.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${slide === idx ? styles.activeIndicator : ''}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}