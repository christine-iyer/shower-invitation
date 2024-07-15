import React from 'react';
import './card.css';

export default function Card({ card, handleChoice, flipped, disabled, showDefinition }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className={flipped ? "flipped" : ""}>
                <div className="back">
                    {showDefinition ? card.definition : card.word}
                </div>
                <div className="front">
                    <img src='/IMG_4937.jpg' alt="back" />
                </div>
            </div>
        </div>
    );
}
