import { useRef, useState } from 'react'
import setClass from '../../utilities/category-class'
import styles from './Haiku.module.scss'

export default function Haiku({ haiku, updateHaiku, deleteHaiku, likeHaiku }) {
  const [showInputs, setShowInputs] = useState({
    showA: false,
    showB: false,
    showC: false,
    showD: false,
    showE: false,
  });

  const inputRefs = {
    showA: useRef(null),
    showB: useRef(null),
    showC: useRef(null),
    showD: useRef(null),
    showE: useRef(null),
  };

  const toggleInput = (field) => {
    // Close all other inputs first, then toggle the selected one
    setShowInputs({
      showA: false,
      showB: false, 
      showC: false,
      showD: false,
      showE: false,
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
    <div className={styles.haikuContainer}>
      <div className={`${styles.haikuCard} ${setClass(haiku)}`}>
        {haiku.title && !showInputs.showE ? (
          <h3 
            className={styles.haikuTitle} 
            onClick={() => toggleInput('showE')}
            style={{ 
              textAlign: 'center', 
              marginBottom: '1rem', 
              cursor: 'pointer',
              display: showInputs.showE ? 'none' : 'block'
            }}
          >
            {haiku.title}
          </h3>
        ) : null}
        
        <input
          ref={inputRefs.showE}
          style={{ 
            display: showInputs.showE ? 'block' : 'none',
            ...inputStyle
          }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRefs.showE.current.value;
              updateHaiku(haiku._id, { title });
              toggleInput('showE');
            }
          }}
          defaultValue={haiku.title}
        />
        
        <div className={styles.haikuLines}>
          <div className={styles.haikuLine}>
            <p 
              className={styles.text} 
              onClick={() => toggleInput('showB')}
              style={{ display: showInputs.showB ? 'none' : 'block' }}
            >
              {haiku.one}
            </p>
            <input
              ref={inputRefs.showB}
              style={{ 
                display: showInputs.showB ? 'block' : 'none',
                ...inputStyle
              }}
              type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const one = inputRefs.showB.current.value;
                  updateHaiku(haiku._id, { one });
                  toggleInput('showB');
                }
              }}
              defaultValue={haiku.one}
            />
          </div>
          
          <div className={styles.haikuLine}>
            <p 
              className={styles.text} 
              onClick={() => toggleInput('showC')}
              style={{ display: showInputs.showC ? 'none' : 'block' }}
            >
              {haiku.two}
            </p>
            <input
              ref={inputRefs.showC}
              style={{ 
                display: showInputs.showC ? 'block' : 'none',
                ...inputStyle
              }}
              type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const two = inputRefs.showC.current.value;
                  updateHaiku(haiku._id, { two });
                  toggleInput('showC');
                }
              }}
              defaultValue={haiku.two}
            />
          </div>
          
          <div className={styles.haikuLine}>
            <p 
              className={styles.text} 
              onClick={() => toggleInput('showD')}
              style={{ display: showInputs.showD ? 'none' : 'block' }}
            >
              {haiku.three}
            </p>
            <input
              ref={inputRefs.showD}
              style={{ 
                display: showInputs.showD ? 'block' : 'none',
                ...inputStyle
              }}
              type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const three = inputRefs.showD.current.value;
                  updateHaiku(haiku._id, { three });
                  toggleInput('showD');
                }
              }}
              defaultValue={haiku.three}
            />
          </div>
        </div>
        
        <button 
          className={styles.haikuDeleteBtn} 
          onClick={() => deleteHaiku(haiku._id)}
          style={buttonStyle}
        >
          消去
        </button>
        <button 
          className={styles.haikuLikeBtn} 
          onClick={() => likeHaiku(haiku._id)}
          style={{
            ...buttonStyle,
            bottom: '0.75rem',
            fontSize: '0.65rem'
          }}
        >
          ♥ {haiku.like}
        </button>
        
        <p 
          onClick={() => toggleInput('showA')} 
          className={styles.haikuAuthor}
          style={{ display: showInputs.showA ? 'none' : 'block' }}
        >
          by {haiku.author} on {new Date(haiku.createdAt).toLocaleDateString()}
        </p>
        <input
          ref={inputRefs.showA}
          type="text"
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
              const author = inputRefs.showA.current.value;
              updateHaiku(haiku._id, { author });
              toggleInput('showA');
            }
          }}
          defaultValue={haiku.author}
        />
      </div>
    </div>
  );
}
