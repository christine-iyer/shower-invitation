import {useState, useRef} from "react";

import '../../App.css'

import SingleCard from "./SingleCard";



const HaikuCard = ({ item,
  updateHaiku,
  deleteHaiku,
  likeHaiku }) => {
    // const [showA, setShowA] = useState(false)
    // const [showB, setShowB] = useState(false)
    // const [showC, setShowC] = useState(false)
    // const [showD, setShowD] = useState(false)
    // const [showE, setShowE] = useState(false)
    // const inputRefA = useRef(null)
    // const inputRefB = useRef(null)
    // const inputRefC = useRef(null)
    // const inputRefD = useRef(null)
    // const inputRefE = useRef(null)

    
  return (
    <>
      <div   >
        <div style={{  padding: '1%', margin: '1%', textAlign: 'left', boxShadow: '12px 12px 12px 11px item.color', 'display': 'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
          {item?.map((Val) => {
            return (
              <SingleCard key={Val._id}
              Val={Val}
              updateHaiku={updateHaiku}
              deleteHaiku={deleteHaiku}
              likeHaiku={likeHaiku}
           />
       
      

            
          );
          })}
        </div>
      </div>
    </>
  );
};

export default HaikuCard;