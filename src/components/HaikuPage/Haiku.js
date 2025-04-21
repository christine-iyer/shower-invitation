import { useRef, useState } from 'react'
import setClass from '../../utilities/category-class'
import styles from './Haiku.module.scss'
import { format } from 'date-fns';


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
    setShowInputs((prevState) => ({
      showA: false,
      showB: false,
      showC: false,
      showD: false,
      showE: false,
      [field]: !prevState[field], // Toggle the selected field
    }));
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
      <div className={`${styles.haikuCard} ${styles[setClass(haiku)] || ''}`}>

  
        {/* Lines */}
        <div className={styles.haikuLines}>
          {/* Line 1 */}
          {!showInputs.showB ? (
            <p
              className={styles.text}
              onClick={() => toggleInput('showB')}
              style={{ cursor: 'pointer' }}
            >
              {haiku.one}
            </p>
          ) : (
            <input
              ref={inputRefs.showB}
              style={{
                display: showInputs.showB ? 'block' : 'none',
                ...inputStyle,
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
          )}
  
          {/* Line 2 */}
          {!showInputs.showC ? (
            <p
              className={styles.text}
              onClick={() => toggleInput('showC')}
              style={{ cursor: 'pointer' }}
            >
              {haiku.two}
            </p>
          ) : (
            <input
              ref={inputRefs.showC}
              style={{
                display: showInputs.showC ? 'block' : 'none',
                ...inputStyle,
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
          )}
  
          {/* Line 3 */}
          {!showInputs.showD ? (
            <p
              className={styles.text}
              onClick={() => toggleInput('showD')}
              style={{ cursor: 'pointer' }}
            >
              {haiku.three}
            </p>
          ) : (
            <input
              ref={inputRefs.showD}
              style={{
                display: showInputs.showD ? 'block' : 'none',
                ...inputStyle,
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
          )}
        </div>
  
        {/* Author */}
        {!showInputs.showA ? (
          <p
            className={styles.haikuAuthor}
            onClick={() => toggleInput('showA')}
            style={{ cursor: 'pointer' }}
          >
            by {haiku.author} on {format(new Date(haiku.createdAt), 'MM/dd/yyyy hh:mm a')}
          </p>
        ) : (
          <input
            ref={inputRefs.showA}
            style={{
              display: showInputs.showA ? 'block' : 'none',
              ...inputStyle,
            }}
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const author = inputRefs.showA.current.value;
                updateHaiku(haiku._id, { author });
                toggleInput('showA');
              }
            }}
            defaultValue={haiku.author}
          />
        )}
      </div>
    </div>
  );
}
