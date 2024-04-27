import React, { useState } from 'react'
import Haiku from './Haiku'

export default function HaikuCarousel({ haikus }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === haikus.length - 1 ? 0 : prevIndex + 1));
    console.log('next')
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? haikus.length - 1 : prevIndex - 1));
    console.log('prev')
  };


  return (
    <div>
    <div>
      <h1>Carousel</h1>
      {
        haikus.length
          ? haikus.map((haiku,index) => (
            <div key={haiku._id}>
              <Haiku haiku={haiku} index={index}/>
            </div>




          ))
          : <>
            <h2>No Haikus Yet... Add one in the Form Above</h2>
          </>
      }

      </div>
      <button onClick={goToPrevSlide}>Back</button>
    
      <button onClick={goToNextSlide}>Next</button>
      </div>
  )
}
