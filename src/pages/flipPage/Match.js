import React from 'react'
import './card.css'


export default function Match({ match, handleMatch, over, prevented }) {
     const handleClick = () => {
          if(!prevented) {
          handleMatch(match)
     }
     }
     return (
          <div className="match" >
               <div className={over ? "over" : ""}>
                    <p className="face">{match.word.toUpperCase()}</p>
                    <img src='/IMG_4816.jpg' onClick={handleClick} className="hair" alt="back" />
               </div>
          </div>
     )
}
