import React, { useState } from 'react';
import AddCorn from '../../components/CornPage/AddCorn';

export default function CornPage() {
  const [corn, setCorn] = useState({
    yellowRaw: 100,
    whiteRaw: 75,
    blueRaw: 25,
    yellowCooked: 100,
    whiteCooked: 75,
    blueCooked: 25,
    yellowProduction: 100,
    whiteProduction: 75,
    blueProduction: 25,
    setUpTime: 30,
    cleanUpTime: 30
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCorn({
      ...corn,
      [name]: Number(value) || value
    });
  };

  const addCorn = async () => {
    try {
      const response = await fetch('/api/corn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(corn)
      });
      
      if (response.ok) {
        const newCorn = await response.json();
        console.log('Corn added:', newCorn);
        // Reset form to defaults
        setCorn({
          yellowRaw: 100,
          whiteRaw: 75,
          blueRaw: 25,
          yellowCooked: 100,
          whiteCooked: 75,
          blueCooked: 25,
          yellowProduction: 100,
          whiteProduction: 75,
          blueProduction: 25,
          setUpTime: 30,
          cleanUpTime: 30
        });
      } else {
        console.error('Error adding corn:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <AddCorn 
        corn={corn} 
        handleChange={handleChange} 
        addCorn={addCorn}
      />
    </div>
  );
}
