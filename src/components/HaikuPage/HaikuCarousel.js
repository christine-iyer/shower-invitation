import React, { useState } from 'react'
import Haiku from './Haiku'

export default function HaikuCarousel({ haikus }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === haikus.length - 1 ? 0 : prevIndex + 1));
    console.log('next slide clicked')
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? haikus.length - 1 : prevIndex - 1));
    console.log('next slide clicked')
  };


  return (
    <div>
    <div>
      <h1>Carousel</h1>
      {
        haikus.length
          ? haikus.map(haiku => (
            <p key={haiku._id}>{haiku.one} {haiku.two} {haiku.three}</p>




          ))
          : <>
            <h2>No Haikus Yet... Add one in the Form Above</h2>
          </>
      }

      </div>
      <button onClick={goToPrevSlide}>Back</button>
      <p haikus={haikus[currentIndex]}></p>
      <button onClick={goToNextSlide}>Next</button>
      </div>
  )
}
