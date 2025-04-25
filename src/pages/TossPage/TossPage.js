import React, { useState } from "react";
import styles from "./Toss.module.scss";

export default function TossPage() {
  const generateBingoNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 25; i++) {
      numbers.push(i);
    }
    return numbers.sort(() => Math.random() - 0.5).slice(0, 25); // Shuffle and take 25 numbers
  };

  const [bingoNumbers, setBingoNumbers] = useState(generateBingoNumbers());
  const [markedCells, setMarkedCells] = useState([]);

  const handleCellClick = (number) => {
    if (!markedCells.includes(number)) {
      setMarkedCells([...markedCells, number]);
    }
  };

  const checkWin = () => {
    const winningPatterns = [
      // Rows
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      // Columns
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      // Diagonals
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    return winningPatterns.some((pattern) =>
      pattern.every((index) => markedCells.includes(bingoNumbers[index]))
    );
  };

  return (
    <div className={styles.bingoContainer}>
      <h1>Bingo Game</h1>
      <div className={styles.bingoGrid}>
        {bingoNumbers.map((number, index) => (
          <div
            key={index}
            className={`${styles.bingoCell} ${
              markedCells.includes(number) ? styles.marked : ""
            }`}
            onClick={() => handleCellClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
      {checkWin() && <h2 className={styles.winMessage}>Bingo! You Win!</h2>}
    </div>
  );
}