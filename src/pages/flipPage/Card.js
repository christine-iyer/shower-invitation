import { useState, useEffect } from 'react';
import Card from './Card';
import confetti from 'canvas-confetti';
import './card.css'

const cardImages = [

          {
              "matched": false,
              "word": "abase",
              "type": "v.",
              "definition": "To lower in position, estimation, or the like; degrade."
          },
          {
              "matched": false,
              "word": "abbess",
              "type": "n.",
              "definition": "The lady superior of a nunnery."
          },
          {
              "matched": false,
              "word": "abbey",
              "type": "n.",
              "definition": "The group of buildings which collectively form the dwelling-place of a society of        "
          },
          {
              "matched": false,
              "word": "abbot",
              "type": "n.",
              "definition": "The superior of a community of monks."
          },
          {
              "matched": false,
              "word": "abdicate",
              "type": "v.",
              "definition": "To give up (royal power or the like)."
          },
          {
              "matched": false,
              "word": "abdomen",
              "type": "n.",
              "definition": "In mammals, the visceral cavity between the diaphragm and the pelvic floor; the         "
          },
          
          
      
];

function getRandomSubset(arr, n) {
     const subset = [...arr].sort(() => Math.random() - 0.5);
     return subset.slice(0, n);
}

export default function FlipCard() {
     const [cards, setCards] = useState([]);
     const [turns, setTurns] = useState(0);
     const [choiceOne, setChoiceOne] = useState(null);
     const [choiceTwo, setChoiceTwo] = useState(null);
     const [disabled, setDisabled] = useState(false);

     const shuffleCards = () => {
          const selected = getRandomSubset(cardImages, 6);
          const shuffledCards = [...selected, ...selected]
               .sort(() => Math.random() - 0.5)
               .map((card) => ({ ...card, id: Math.random() }));

          setChoiceOne(null);
          setChoiceTwo(null);
          setCards(shuffledCards);
          setTurns(0);
     };

     const handleChoice = (card) => {
          choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
     };

     useEffect(() => {
          if (choiceOne && choiceTwo) {
               setDisabled(true);
               if (choiceOne.word === choiceTwo.word) {
                    setCards(prevCards => {
                         return prevCards.map(card => {
                              if (card.word === choiceOne.word) {
                                   return { ...card, matched: true };
                              } else {
                                   return card;
                              }
                         });
                    });
                    setTimeout(() => {
                         triggerConfetti(); // Trigger confetti on match
                         resetTurn(true)
                    }, 1000)

               } else {
                    setTimeout(() => resetTurn(), 1000);
               }
          }
     }, [choiceOne, choiceTwo]);

     const triggerConfetti = () => {
          confetti({
               particleCount: 1000,
               spread: 170,
               origin: { y: 0.6 }
          });
     };

     const resetTurn = (matched) => {
          setChoiceOne(null);
          setChoiceTwo(null);
          setTurns(prev => prev +  (matched ? 0 : 1 ));
          setDisabled(false);
     };

     useEffect(() => {
          shuffleCards();
     }, []);

     return (
          <div className="flipcard">
               <h1>Matching</h1>
               <button onClick={shuffleCards}>NewGame</button>
               <div className='card-grid'>
                    {cards.map(card => (
                         <Card key={card.id}
                              card={card}
                              handleChoice={handleChoice}
                              flipped={card === choiceOne || card === choiceTwo || card.matched}
                              disabled={disabled}
                         >{choiceOne ? card.definition : card.word} </Card>
                    ))}
                    <p style={{ fontSize: '27px', color:'brown' }}>Misses: {turns}</p>
               </div>
          </div>
     );
}
