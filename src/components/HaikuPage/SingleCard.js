import { useRef, useState } from 'react';
import styles from './SingleCard.module.scss';

export default function SingleCard({
  Val,
  updateHaiku,
  deleteHaiku,
  likeHaiku,
}) {
  const [showInputs, setShowInputs] = useState({
    showA: false,
    showB: false,
    showC: false,
    showD: false,
  });

  const inputRefA = useRef(null);
  const inputRefB = useRef(null);
  const inputRefC = useRef(null);
  const inputRefD = useRef(null);

  const toggleInput = (field) => {
    console.log(`Toggling input for: ${field}`); // Debugging log
    setShowInputs({
      showA: false,
      showB: false,
      showC: false,
      showD: false,
      [field]: !showInputs[field],
    });
  };

  return (
    <div className={styles.haikuCard}>
      <div className={styles.text}>
        <p
          className={styles.line}
          onClick={() => toggleInput('showB')}
          style={{ display: showInputs.showB ? 'none' : 'block' }}
        >
          {Val.one}
        </p>
        <input
          ref={inputRefB}
          className={`${styles.inputField} ${showInputs.showB ? 'show' : ''}`}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value;
              console.log(`Updating haiku line one: ${one}`); // Debugging log
              updateHaiku(Val._id, { one });
              toggleInput('showB');
            }
          }}
          defaultValue={Val.one}
        />

        <p
          className={styles.line}
          onClick={() => toggleInput('showC')}
          style={{ display: showInputs.showC ? 'none' : 'block' }}
        >
          {Val.two}
        </p>
        <input
          ref={inputRefC}
          className={`${styles.inputField} ${showInputs.showC ? 'show' : ''}`}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const two = inputRefC.current.value;
              console.log(`Updating haiku line two: ${two}`); // Debugging log
              updateHaiku(Val._id, { two });
              toggleInput('showC');
            }
          }}
          defaultValue={Val.two}
        />

        <p
          className={styles.line}
          onClick={() => toggleInput('showD')}
          style={{ display: showInputs.showD ? 'none' : 'block' }}
        >
          {Val.three}
        </p>
        <input
          ref={inputRefD}
          className={`${styles.inputField} ${showInputs.showD ? 'show' : ''}`}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const three = inputRefD.current.value;
              console.log(`Updating haiku line three: ${three}`); // Debugging log
              updateHaiku(Val._id, { three });
              toggleInput('showD');
            }
          }}
          defaultValue={Val.three}
        />
      </div>

      <div className={styles.haikuDetails}>
        <p className={styles.author}>
          by {Val.author} on {new Date(Val.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className={styles.haikuActions}>
        <button
          className={`${styles.haikuLikeBtn} ${styles.actionButton}`}
          onClick={() => likeHaiku(Val._id)}
        >
          ♥♥♥♥♥♥♥♥♥ {Val.like}
        </button>
        <button
          className={`${styles.haikuDeleteBtn} ${styles.actionButton}`}
          onClick={() => deleteHaiku(Val._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}