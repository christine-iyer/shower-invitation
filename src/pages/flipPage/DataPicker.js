// const [data, setData] = useState([
//   "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/lies.csv",
//   "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/data.csv",
//   "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/newdata.csv"
// ])
import React, { useState } from 'react';

const ChoiceComponent = () => {
  const [selectedChoice, setSelectedChoice] = useState('');

  const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  return (
    <div>
      <h1>Select a Choice</h1>
      <form>
        <div>
          <input
            type="radio"
            id="choice1"
            name="choice"
            value="Choice 1"
            checked={selectedChoice === 'Choice 1'}
            onChange={handleChoiceChange}
          />
          <label htmlFor="choice1">Choice 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="choice2"
            name="choice"
            value="Choice 2"
            checked={selectedChoice === 'Choice 2'}
            onChange={handleChoiceChange}
          />
          <label htmlFor="choice2">Choice 2</label>
        </div>
        <div>
          <input
            type="radio"
            id="choice3"
            name="choice"
            value="Choice 3"
            checked={selectedChoice === 'Choice 3'}
            onChange={handleChoiceChange}
          />
          <label htmlFor="choice3">Choice 3</label>
        </div>
      </form>
      {selectedChoice && <h2>You selected: {selectedChoice}</h2>}
    </div>
  );
};

export default ChoiceComponent;
