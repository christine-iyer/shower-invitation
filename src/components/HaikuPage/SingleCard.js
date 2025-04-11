import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import setClass from '../../utilities/category-class'
import styles from './SingleCard.module.scss';

export default function SingleCard({
  Val,
  updateHaiku,
  deleteHaiku,
  likeHaiku,
}) {
  // Use a single state object to manage all input displays
  const [showInputs, setShowInputs] = useState({
    showA: false,
    showB: false,
    showC: false,
    showD: false,
  });
  
  const inputRefA = useRef(null)
  const inputRefB = useRef(null)
  const inputRefC = useRef(null)
  const inputRefD = useRef(null)
  
  // Function to toggle input visibility
  const toggleInput = (field) => {
    // Close all inputs first, then toggle the selected one
    setShowInputs({
      showA: false,
      showB: false,
      showC: false,
      showD: false,
      [field]: !showInputs[field],
    });
  };
  
  // Common input style
  const inputStyle = {
    width: '100%',
    maxWidth: '300px',
    margin: '0.25rem auto',
    padding: '0.4rem 0.6rem',
    fontSize: '0.9rem',
    border: '1px solid #d4a5a5',
    borderRadius: '4px',
    backgroundColor: 'white',
    fontFamily: 'inherit',
    textAlign: 'center',
    display: 'block'
  };
  
  const buttonStyle = {
    fontSize: '0.7rem',
    padding: '0.2rem 0.4rem',
    border: '1px solid #d4a5a5',
    borderRadius: '4px',
    background: 'none',
    color: '#2c3e50',
    maxWidth: '40px',
    minWidth: 'auto',
    width: 'auto',
    height: 'auto'
  };
 
  return (
    <>
      <Card className={`${setClass(Val)} haikuCard`}>
        <div className={styles.haikuLines}>
          <div className={styles.haikuLine}>
            <Card.Text 
              className={styles.text} 
              onClick={() => toggleInput('showB')}
              style={{ display: showInputs.showB ? 'none' : 'block' }}
            >
              {Val.one}
            </Card.Text>
            <input
              ref={inputRefB}
                style={{ 
                display: showInputs.showB ? 'block' : 'none',
                ...inputStyle
              }}
              type='text'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const one = inputRefB.current.value
                  updateHaiku(Val._id, { one: one });
                  toggleInput('showB');
                }
              }}
              defaultValue={Val.one}
            />
          </div>
          
          <div className={styles.haikuLine}>
            <Card.Text 
              className={styles.text} 
              onClick={() => toggleInput('showC')}
              style={{ display: showInputs.showC ? 'none' : 'block' }}
            >
              {Val.two}
            </Card.Text>
            <input
              ref={inputRefC}
              style={{ 
                display: showInputs.showC ? 'block' : 'none',
                ...inputStyle
              }}
              type='text'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const two = inputRefC.current.value
                  updateHaiku(Val._id, { two: two })
                  toggleInput('showC');
                }
              }}
              defaultValue={Val.two}
            />
          </div>
          
          <div className={styles.haikuLine}>
            <Card.Text 
              className={styles.text} 
              onClick={() => toggleInput('showD')}
              style={{ display: showInputs.showD ? 'none' : 'block' }}
            >
              {Val.three}
            </Card.Text>
            <input
              ref={inputRefD}
              style={{ 
                display: showInputs.showD ? 'block' : 'none',
                ...inputStyle
              }}
              type='text'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const three = inputRefD.current.value
                  updateHaiku(Val._id, { three: three })
                  toggleInput('showD');
                }
              }}
              defaultValue={Val.three}
            />
          </div>
        </div>
        
        <button 
          className={styles.haikuDeleteBtn} 
          onClick={() => deleteHaiku(Val._id)}
          style={buttonStyle}
        >
          消去
        </button>
        <button 
          className={styles.haikuEditBtn} 
          onClick={() => {
            toggleInput('showA');
            toggleInput('showB');
            toggleInput('showC');
            toggleInput('showD');
          }}
          style={buttonStyle}
        >
          Edit Haiku
        </button>
        <button 
          className={styles.haikuLikeBtn} 
          onClick={() => likeHaiku(Val._id)}
          style={{
            ...buttonStyle,
            bottom: '0.75rem',
            fontSize: '0.65rem'
          }}
        >
          ♥ {Val.like}
        </button>
        
        <p 
          onClick={() => toggleInput('showA')} 
          className={styles.haikuAuthor}
          style={{ display: showInputs.showA ? 'none' : 'block' }}
        >
          by {Val.author} on {new Date(Val.createdAt).toLocaleDateString()}
        </p>
        <input
          ref={inputRefA}
          type='text'
          style={{ 
            display: showInputs.showA ? 'block' : 'none',
            ...inputStyle,
            position: 'absolute',
            bottom: '0.75rem',
            right: '3.5rem',
            maxWidth: '150px'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefA.current.value
              updateHaiku(Val._id, { author: author })
              toggleInput('showA');
              }
          }}
          defaultValue={Val.author}
        />
      </Card>
    </>
  )
}