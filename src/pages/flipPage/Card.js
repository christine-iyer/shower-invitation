import React from 'react'
import './card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
     const handleClick = () => {
          if(!disabled) {
          handleChoice(card)
     }
     }
     return (
          <div className="card" >
               <div className={flipped ? "flipped" : ""}>
                    <p className="front">{card.word.toUpperCase()}</p>
                    <img src='/IMG_4816.jpg' onClick={handleClick} className="back" alt="back" />
               </div>
          </div>
     )
}

