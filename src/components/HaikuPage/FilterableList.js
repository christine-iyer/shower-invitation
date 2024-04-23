import React,{useState} from 'react'
import Buttons from './Buttons'
import HaikuCard from './HaikuCard'
export default function FilterableList({haikus}) {
     const [item, setItem] = useState(haikus);
const menuItems = [...new Set(haikus?.map((Val) => Val.author))];
const filterItem = (curcat) => {
    const newItem = haikus?.filter((newVal) => {
      return newVal.author === curcat;
    });
    setItem(newItem);
  };

  return (
    <div>
      <h1>Filtable List</h1>
        <Buttons
          haikus={haikus}
          item={item}
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
        <HaikuCard
          haikus={haikus}
          item={item}
          filterItem={filterItem}
         /> 


    </div>
  )
}
