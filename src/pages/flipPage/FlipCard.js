import { useState, useEffect } from 'react';
import Card from './Card';
import confetti from 'canvas-confetti';
import './card.css'

const cardImages = [
     { "word": "bad", "matched": false },
     { "word": "bed", "matched": false },
     { "word": "bag", "matched": false },
     { "word": "bit", "matched": false },
     { "word": "bog", "matched": false },
     { "word": "box", "matched": false },
     { "word": "bug", "matched": false },
     { "word": "bun", "matched": false },
     { "word": "bus", "matched": false },
     { "word": "cap", "matched": false },
     { "word": "cup", "matched": false },
     { "word": "dig", "matched": false },
     { "word": "dot", "matched": false },
     { "word": "fix", "matched": false },
     { "word": "fog", "matched": false },
     { "word": "fox", "matched": false },
     { "word": "fun", "matched": false },
     { "word": "gas", "matched": false },
     { "word": "got", "matched": false },
     { "word": "hen", "matched": false },
     { "word": "hog", "matched": false },
     { "word": "hip", "matched": false },
     { "word": "hug", "matched": false },
     { "word": "hum", "matched": false },
     { "word": "jet", "matched": false },
     { "word": "job", "matched": false },
     { "word": "jog", "matched": false },
     { "word": "jug", "matched": false },
     { "word": "kid", "matched": false },
     { "word": "leg", "matched": false },
     { "word": "lip", "matched": false },
     { "word": "man", "matched": false },
     { "word": "map", "matched": false },
     { "word": "men", "matched": false },
     { "word": "mix", "matched": false },
     { "word": "nap", "matched": false },
     { "word": "pen", "matched": false },
     { "word": "rag", "matched": false },
     { "word": "rob", "matched": false },
     { "word": "rug", "matched": false },
     { "word": "six", "matched": false },
     { "word": "sun", "matched": false },
     { "word": "tax", "matched": false },
     { "word": "ten", "matched": false },
     { "word": "wax", "matched": false },
     { "word": "web", "matched": false },
     { "word": "wet", "matched": false },
     { "word": "wig", "matched": false },
     { "word": "win", "matched": false },
     { "word": "yes", "matched": false },
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
                         />
                    ))}
                    <p style={{ fontSize: '27px', color:'brown' }}>Misses: {turns}</p>
               </div>
          </div>
     );
}
