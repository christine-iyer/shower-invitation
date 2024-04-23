import {useState, useRef} from "react";
import Card from 'react-bootstrap/Card'
import '../../App.css'
import setClass from '../../utilities/category-class';
import styles from './HaikuList.module.scss'



const HaikuCard = ({ item,haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku }) => {
    const [showA, setShowA] = useState(false)
    const [showB, setShowB] = useState(false)
    const [showC, setShowC] = useState(false)
    const [showD, setShowD] = useState(false)
    const [showE, setShowE] = useState(false)
    const inputRefA = useRef(null)
    const inputRefB = useRef(null)
    const inputRefC = useRef(null)
    const inputRefD = useRef(null)
    const inputRefE = useRef(null)

    
  return (
    <>
      <div   >
        <div style={{  padding: '1%', margin: '1%', textAlign: 'left', boxShadow: '12px 12px 12px 11px item.color', 'display': 'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
          {item?.map((Val) => {
            return (
              <Card key={Val._id}className={setClass(Val,styles)} style={{ width: '20%', height: '10%', padding: '1%', margin: '1%', textAlign: 'left', boxShadow: '12px 12px 12px 11px Val.color'}}>
        {/* <Card.Title onClick={() => setShowE(!showE)}>Title: {Val.title}</Card.Title>
        <input
          ref={inputRefE}
          style={{ display: showE ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
             
              const title = inputRefE.current.value
              updateHaiku(Val._id, { title: title });
              setShowE(false)
            }
          }}
          defaultValue={Val.title}
        /> */}

        <Card.Text className="text" onClick={() => setShowB(!showB)}>{Val.one}</Card.Text>
        <input
          ref={inputRefB}
          style={{ display: showB ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value
              updateHaiku(Val._id, { one: one });
              setShowB(false)
            }
          }}
          defaultValue={Val.one}
        />
        <Card.Text className="text" onClick={() => setShowC(!showC)}>{Val.two}</Card.Text>
        {/* <input
          ref={inputRefC}
          style={{ display: showC ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const two = inputRefC.current.value
              updateHaiku(Val._id, { two: two })
              setShowC(false)
            }
          }}
          defaultValue={Val.two}
        /> */}
        <Card.Text className="texty" onClick={() => setShowD(!showD)}>{Val.three}</Card.Text>
        {/* <input
          ref={inputRefD}
          style={{ display: showD ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const three = inputRefD.current.value
              updateHaiku(Val._id, { three: three })
              setShowD(false)
            }
          }}
          defaultValue={Val.three}
        /> */}
          <span><p onClick={() => setShowA(!showA)}>by {Val.author}</p> <input
          ref={inputRefA}
          type='text'
          style={{ display: showA ? 'block' : 'none' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefA.current.value
              updateHaiku(Val._id, { author: author })
              setShowA(false)
            }
          }}
          defaultValue={Val.author}
        />
       
        <p style={{
          defaultValue: "#E45845",
          color: Val.color,
          display: "flex", alignItems: "center",
          position: "relative", zIndex: 1
        }} > {new Date(Val.createdAt).toLocaleDateString()}  </p>
    </span>
        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => deleteHaiku(Val._id)}>X</button>

        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => likeHaiku(Val._id)}>🧡 {Val.like}</button>
       
      </Card>
              // <div
              // className={setClass(item,styles)}
              //   key={Val._id}
              // >
              //   <h1 className="card-img-top text-center">
                 
              //   </h1>
              //   <div className="card-body">
              //     <div className="card-title fw-bold fs-4">

              //       {Val.author} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
              //       {Val.one}{Val.two}{Val.three}
              //     </div>
                 
              //   </div>
              // </div>
            
          );
          })}
        </div>
      </div>
    </>
  );
};

export default HaikuCard;