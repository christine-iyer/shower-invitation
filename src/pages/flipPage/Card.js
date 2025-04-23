import React from 'react';
import styles from './Card.module.scss';

export default function Card({ card, handleChoice, flipped, disabled, showDefinition }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={flipped ? styles.flipped : ""}>
                <div className={styles.back}>
                    {showDefinition ? card.definition : card.word}
                </div>
                <div className={styles.front}>
                    <img src='/IMG_4937.jpg' alt="back" />
                </div>
            </div>
        </div>
    );
}
