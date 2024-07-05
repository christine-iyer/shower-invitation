import React from 'react'
import './card.css'

export default function Card({ card, handleChoice, flipped, disabled, choiceOne}) {
     const handleClick = () => {
          if(!disabled) {
          handleChoice(card)
     }
     }
     return (
          <div className="card" >
               <div className={flipped ? "flipped" : ""}>
                    
                    
                    <div className="front"> {choiceOne ? card.word : card.definition}</div>
                    <img src='/IMG_4816.jpg' onClick={handleClick} className="back" alt="back" />
               </div>
          </div>
     )
}

