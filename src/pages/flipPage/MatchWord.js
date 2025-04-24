import { useState, useEffect } from 'react';
import Match from './Match';
import confetti from 'canvas-confetti';
import styles from './Card.module.scss'

const matchImages = [
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

export default function FlipMatch() {
     const [matchs, setMatchs] = useState([]);
     const [rounds, setRounds] = useState(0);
     const [choiceThree, setChoiceThree] = useState(null);
     const [choiceFour, setChoiceFour] = useState(null);
     const [prevented, setPrevented] = useState(false);

     const shuffleMatchs = () => {
          const selected = getRandomSubset(matchImages, 6);
          const shuffledMatchs = [...selected, ...selected]
               .sort(() => Math.random() - 0.5)
               .map((match) => ({ ...match, id: Math.random() }));

          setChoiceThree(null);
          setChoiceFour(null);
          setMatchs(shuffledMatchs);
          setRounds(0);
     };

     const handleMatch = (match) => {
          choiceThree ? setChoiceFour(match) : setChoiceThree(match);
     };

     useEffect(() => {
          if (choiceThree && choiceFour) {
               setPrevented(true);
               if (choiceThree.word === choiceFour.word) {
                    setMatchs(prevMatchs => {
                         return prevMatchs.map(match => {
                              if (match.word === choiceThree.word) {
                                   return { ...match, matched: true };
                              } else {
                                   return match;
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
     }, [choiceThree, choiceFour]);

     const triggerConfetti = () => {
          confetti({
               particleCount: 1000,
               spread: 170,
               origin: { y: 0.6 }
          });
     };

     const resetTurn = (matched) => {
          setChoiceThree(null);
          setChoiceFour(null);
          setRounds(prev => prev +  (matched ? 0 : 1 ));
          setPrevented(false);
     };

     useEffect(() => {
          shuffleMatchs();
     }, []);

     return (
          <div className={styles.flipmatch}>
            <h2>Matching</h2>
            <button onClick={shuffleMatchs}>New Game</button>
            <div className={styles.matchGrid}>
              {matchs.map(match => (
                <Match
                  key={match.id}
                  match={match}
                  handleMatch={handleMatch}
                  over={match === choiceThree || match === choiceFour || match.matched}
                  prevented={prevented}
                />
              ))}
            </div>
            <p className={styles.text}>Misses: {rounds}</p>
          </div>
        );
}