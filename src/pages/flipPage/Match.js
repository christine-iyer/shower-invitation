import React from 'react'
import styles from './Card.module.scss'


export default function Match({ match, handleMatch, over, prevented }) {
     const handleClick = () => {
          if(!prevented) {
          handleMatch(match)
     }
     }
     return (
          <div className={styles.match} >
               <div className={over ? styles.over : ""}>
                    <p className={styles.hair}>{match.word.toUpperCase()}</p>
                    <img src='/IMG_4816.jpg' onClick={handleClick} className="face" alt="back" />
               </div>
          </div>
     )
}
