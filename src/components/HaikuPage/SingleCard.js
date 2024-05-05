import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import '../../App.css'
import setClass from '../../utilities/category-class'
import styles from './HaikuList.module.scss'




export default function SingleCard({
  Val,
  updateHaiku,
  deleteHaiku,
  likeHaiku,
}) {


  const [showA, setShowA] = useState(false)
  const [showB, setShowB] = useState(false)
  const [showC, setShowC] = useState(false)
  const [showD, setShowD] = useState(false)
  const inputRefA = useRef(null)
  const inputRefB = useRef(null)
  const inputRefC = useRef(null)
  const inputRefD = useRef(null)
 
  return (
    < >
      <Card  style={{marginTop:'10%',padding: '1%', margin: '1%', textAlign: 'center', boxShadow: '12px 12px 12px 11px Val.color', content:"initial"}} className={setClass(Val,styles)}>
       
        <Card.Text className={styles.texty} onClick={() => setShowB(!showB)}>{Val.one}</Card.Text>
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
        <Card.Text className={styles.text} onClick={() => setShowC(!showC)}>{Val.two}</Card.Text>
        <input
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
        />
        <Card.Text className={styles.text} onClick={() => setShowD(!showD)}>{Val.three}</Card.Text>
        <input
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
        />
        <p onClick={() => setShowA(!showA)}>by {Val.author} on {new Date(Val.createdAt).toLocaleDateString()} </p> <input
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
       
       
        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => deleteHaiku(Val._id)}>消去</button>

        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => likeHaiku(Val._id)}>愛 {Val.like}</button>

      </Card>
    </>
  )
}