import { useRef, useState } from 'react'
import setClass from '../../utilities/category-class'
import styles from './HaikuList.module.scss'

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
    setShowInputs((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className={styles.haikuContainer}>
      <div className={`${styles.haikuCard} ${setClass(haiku, styles)}`}>
        <input
          ref={inputRefs.showE}
          style={{ display: showInputs.showE ? 'block' : 'none' }}
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
        <p className={styles.text} onClick={() => toggleInput('showB')}>{haiku.one}</p>
        <input
          ref={inputRefs.showB}
          style={{ display: showInputs.showB ? 'block' : 'none' }}
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
        <hr />
        <p className={styles.text} onClick={() => toggleInput('showC')}>{haiku.two}</p>
        <input
          ref={inputRefs.showC}
          style={{ display: showInputs.showC ? 'block' : 'none' }}
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
        <hr />
        <p className={styles.text} onClick={() => toggleInput('showD')}>{haiku.three}</p>
        <input
          ref={inputRefs.showD}
          style={{ display: showInputs.showD ? 'block' : 'none' }}
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
        <p onClick={() => toggleInput('showA')}>
          by {haiku.author} on {new Date(haiku.createdAt).toLocaleDateString()}
        </p>
        <input
          ref={inputRefs.showA}
          type="text"
          style={{ display: showInputs.showA ? 'block' : 'none' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefs.showA.current.value;
              updateHaiku(haiku._id, { author });
              toggleInput('showA');
            }
          }}
          defaultValue={haiku.author}
        />
        <div className={styles.buttons}>
          <button onClick={() => deleteHaiku(haiku._id)} className={styles.deleteButton}>消去</button>
          <button onClick={() => likeHaiku(haiku._id)} className={styles.likeButton}>愛 {haiku.like}</button>
        </div>
      </div>
    </div>
  );
}
