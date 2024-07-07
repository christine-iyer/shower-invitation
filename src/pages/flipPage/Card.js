import React from 'react';
import './card.css';

export default function Card({ card, handleChoice, flipped, disabled, choiceTwo }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className={flipped ? "flipped" : ""}>
                <div className="front">
                    {choiceTwo ? card.definition : card.word}
                </div>
                <div className="back">
                    <img src='/IMG_4816.jpg' alt="back" />
                </div>
            </div>
        </div>
    );
}
