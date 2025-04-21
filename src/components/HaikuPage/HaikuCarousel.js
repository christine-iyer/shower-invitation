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
    console.log("Haikus array:", haikus);
  }, []); // Logs only on the initial render
  useEffect(() => {
    console.log("Current slide index:", slide);
  }, [slide]); // Logs only when the `slide` state changes
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slide]);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <BsArrowLeftCircleFill onClick={prevSlide} className={styles.arrow} />
        {haikus.map((item, idx) => {
  if (!item.createdAt || isNaN(new Date(item.createdAt).getTime())) {
    console.error(`Invalid date for haiku at index ${idx}:`, item.createdAt);
    return null; // Skip rendering this haiku
  }

  return (
    <div
      key={idx}
      className={slide === idx ? styles.slide : styles.slideSlideHidden}
    >
      <Haiku
        haiku={item}
        updateHaiku={updateHaiku}
        deleteHaiku={deleteHaiku}
        likeHaiku={likeHaiku}
      />
    </div>
  );
})}
        <BsArrowRightCircleFill onClick={nextSlide} className={styles.arrow} />
        <div className={styles.indicators}>
          {haikus.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${slide === idx ? "" : styles.indicatorInactive}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}