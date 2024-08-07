import { useRef, useState } from 'react'

// import '../../App.css'
import setClass from '../../utilities/category-class'
import styles from './HaikuList.module.scss'




export default function Haiku({
  haiku,
  updateHaiku,
  deleteHaiku,
  likeHaiku,
}) {


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
    < div>
      <card className="haikuCard" className={setClass(haiku,styles)}>
       
        <input
          ref={inputRefE}
          style={{ display: showE ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRefE.current.value
              updateHaiku(haiku._id, { title: title });
              setShowE(false)
            }
          }}
          defaultValue={haiku.title}
        />

        <p className={styles.texty} onClick={() => setShowB(!showB)}>{haiku.one}</p>
        <input
          ref={inputRefB}
          style={{ display: showB ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value
              updateHaiku(haiku._id, { one: one });
              setShowB(false)
            }
          }}
          defaultValue={haiku.one}
        />
        <hr></hr>
        <p className={styles.text} onClick={() => setShowC(!showC)}>{haiku.two}</p>
        <input
          ref={inputRefC}
          style={{ display: showC ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const two = inputRefC.current.value
              updateHaiku(haiku._id, { two: two })
              setShowC(false)
            }
          }}
          defaultValue={haiku.two}
        />
         <hr></hr>
        <p className={styles.text} onClick={() => setShowD(!showD)}>{haiku.three}</p>
        <input
          ref={inputRefD}
          style={{ display: showD ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const three = inputRefD.current.value
              updateHaiku(haiku._id, { three: three })
              setShowD(false)
            }
          }}
          defaultValue={haiku.three}
        />
        <p onClick={() => setShowA(!showA)}>by {haiku.author} on {new Date(haiku.createdAt).toLocaleDateString()} </p> <input
          ref={inputRefA}
          type='text'
          style={{ display: showA ? 'block' : 'none' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefA.current.value
              updateHaiku(haiku._id, { author: author })
              setShowA(false)
            }
          }}
          defaultValue={haiku.author}
        />
       
       
        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => deleteHaiku(haiku._id)}>消去</button>

        <button style={{ 'fontStyle': 'italic' , 'width':'30%', 'display':'inlineBlock', border:'none', opacity:'50%'}} className="btn btn-outline-warning" onClick={() => likeHaiku(haiku._id)}>愛 {haiku.like}</button>

      </card>
    </div>
  )
}