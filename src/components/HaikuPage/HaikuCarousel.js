import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Haiku from "./Haiku";
import styles from './HaikuCarousel.module.scss';

export default function HaikuCarousel({ haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku
 }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === haikus.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? haikus.length - 1 : slide - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <BsArrowLeftCircleFill onClick={prevSlide} className={styles.arrow} />
        {haikus.map((item, idx) => {
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
          {haikus.map((_, idx) => {
            return (
              <button
                key={idx}
                className={`${styles.indicator} ${slide === idx ? "" : styles.indicatorInactive}`}
                onClick={() => setSlide(idx)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
