import { useState, useEffect, useRef } from 'react'
import UploadWidget from '../../components/BlahgPage/UploadWidget';
import styles from './BlahgPage.module.scss'

export default function BlahgPage() {
  const [blahg, setBlahg] = useState({
    createdAt: new Date('2023-09-20T14:20:04.899+00:00'),
    title: '',
    author: '',
    category: '',
    text: '',
    image: '',
    like: 0
  })
  const [blahgs, setBlahgs] = useState([])
  const [foundBlahgs, setFoundBlahgs] = useState(null)
  const [editState, setEditState] = useState({ isEditing: false, blahgId: null });

  // Franky's birthday
  const frankyBirthday = new Date('2023-09-11');

  // Function to calculate Franky's age at a given date
  const calculateFrankyAge = (date) => {
    const postDate = new Date(date);
    const diffTime = Math.abs(postDate - frankyBirthday);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calculate months and days
    const months = Math.floor(diffDays / 30);
    const days = diffDays % 30;

    if (months === 0) {
      return `${days} day${days !== 1 ? 's' : ''}`;
    } else if (days === 0) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      return `${months} month${months !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`;
    }
  };

  const [url, updateUrl] = useState(false);
  const [error, updateError] = useState();

  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)

  const handleChange = (evt) => {
    setBlahg({ ...blahg, [evt.target.name]: evt.target.value })
  }

  const createBlahg = async () => {
    try {
      const response = await fetch('/api/blahgs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...blahg })
      })
      const data = await response.json()
      setBlahg([data, ...blahgs])
    } catch (error) {
      console.error(error)
    } finally {
      setBlahg({
        title: '',
        createdDate: '',
        author: '',
        category: '',
        text: '',
        image: '',
        like: 0
      })
    }
  }

  const likeBlahg = async (id) => {
    try {
      const index = blahgs.findIndex((blahg) => blahg._id === id)
      const blahgsCopy = [...blahgs]
      const subject = blahgsCopy[index]
      subject.like = subject.like + 1
      const response = await fetch(`/api/blahgs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject)
      })
      const updatedBlahg = await response.json()
      const completedBlahgsCopy = [updatedBlahg, ...blahgs]

      setBlahgs(completedBlahgsCopy)
      // blahgsCopy.splice(index, 1)
      setBlahgs(blahgsCopy)

    } catch (error) {
      console.error(error)
    }
  }

  // Delete blahg function
  const deleteBlahg = async (id) => {
    try {
      await fetch(`/api/blahgs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // Remove from state after successful deletion
      const updatedBlahgs = blahgs.filter((blahg) => blahg._id !== id)
      setBlahgs(updatedBlahgs)
    } catch (error) {
      console.error(error)
    }
  }

  // Start editing a blahg
  const startEditing = (blahg) => {
    setEditState({
      isEditing: true,
      blahgId: blahg._id,
      title: blahg.title,
      text: blahg.text
    })
  }

  // Cancel editing
  const cancelEditing = () => {
    setEditState({
      isEditing: false,
      blahgId: null,
      title: '',
      text: ''
    })
  }

  // Handle edit changes
  const handleEditChange = (evt) => {
    setEditState({
      ...editState,
      [evt.target.name]: evt.target.value
    })
  }

  // Save edits
  const saveEdits = async (id) => {
    try {
      const index = blahgs.findIndex((blahg) => blahg._id === id)
      const blahgsCopy = [...blahgs]
      const subject = { ...blahgsCopy[index] }

      // Update with edited values
      subject.title = editState.title
      subject.text = editState.text

      const response = await fetch(`/api/blahgs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject)
      })

      const updatedBlahg = await response.json()

      // Update the blahg in the array
      blahgsCopy[index] = updatedBlahg
      setBlahgs(blahgsCopy)

      // Reset edit state
      cancelEditing()

    } catch (error) {
      console.error(error)
    }
  }

  const getBlahgs = async () => {
    try {
      const response = await fetch('/api/blahgs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()
      setBlahgs(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBlahgs()
  }, [foundBlahgs])

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    console.dir(result);
    updateUrl(result?.info?.secure_url);
    console.dir(url);
    setBlahg({
      title: '',
      author: '',
      category: '',
      text: '',
      image: result?.info?.secure_url,
      like: 0
    })
  }
  return (
    <div className={styles.franky}>
      <section>
        <div className={styles.create}>
          <h1>Scientific Observation Record</h1>
          <div className={styles.uploadSection}>
            <span>
              <UploadWidget onUpload={handleOnUpload}>
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button onClick={handleOnClick}>
                      Attach Photographic Evidence
                    </button>
                  );
                }}
              </UploadWidget>
              {error && <p>{error}</p>}
              {url && (
                <div key={url._id} className={styles.previewcard}>
                  <img variant="top" src={url} alt='' id="uploadedimage" />
                </div>
              )}
            </span>
          </div>

          <div className={styles.formSection}>
            <label className={styles.formLabel}>Observation Title</label>
            <input
              type='text'
              value={blahg.title}
              onChange={handleChange}
              name="title"
              placeholder='Enter the title of your observation'
            />
          </div>

          <div className={styles.formSection}>
            <label className={styles.formLabel}>Observer Name</label>
            <input
              value={blahg.author}
              onChange={handleChange}
              name="author"
              placeholder='Your name as the observer'
            />
          </div>

          <div className={styles.formSection}>
            <label className={styles.formLabel}>Observation Notes</label>
            <input
              value={blahg.text}
              onChange={handleChange}
              name="text"
              placeholder='Detailed description of the observation'
            />
          </div>

          <div className={styles.formSection}>
            <label className={styles.formLabel}>Classification Category</label>
            <select
              value={blahg.category}
              onChange={handleChange}
              name="category"
            >
              <option value="🤍 Frankly Franky">Select Classification Category</option>
              <option value="💛 Janky Franky">💛 Janky Franky</option>
              <option value="🧡 Franky Panky">🧡 Franky Panky</option>
              <option value="💚 Cranky Franky">💚 Cranky Franky</option>
              <option value="💙 Franky 🌙">💙 Franky 🌙</option>
              <option value="💜 Swanky Franky">💜 Swanky Franky</option>
              <option value="❤️ C'est la vie, Franky!">❤️ C'est la vie, Franky!</option>
            </select>
          </div>

          <button onClick={() => createBlahg()}>Submit Observation for Review</button>
        </div>
      </section>

      <div>
        <h1 className={styles.title}>Observation Records</h1>
        {blahgs && blahgs.length ? (
          <div className={styles.cards}>
            {blahgs.map((blahg) => (
              <div key={blahg._id} className={styles.card}>
                {/* Delete button */}
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteBlahg(blahg._id)}
                >
                  ×
                </button>

                <div className={styles.imageContainer}>
                  <img className={styles.image} src={blahg.image} alt='...' />
                  <p className={styles.frankyAge}>
                    ({calculateFrankyAge(blahg.createdAt)})
                  </p>
                </div>
                <div className={styles.textContainer}>
                  {editState.isEditing && editState.blahgId === blahg._id ? (
                    // Edit Mode
                    <>
                      <input
                        className={styles.editableInput}
                        value={editState.title}
                        onChange={handleEditChange}
                        name="title"
                        placeholder="Title"
                      />
                      <textarea
                        className={styles.editableTextarea}
                        value={editState.text}
                        onChange={handleEditChange}
                        name="text"
                        placeholder="Text"
                      />
                      <div className={styles.editControls}>
                        <button
                          className={styles.cancelButton}
                          onClick={cancelEditing}
                        >
                          Cancel
                        </button>
                        <button
                          className={styles.saveButton}
                          onClick={() => saveEdits(blahg._id)}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    // View Mode
                    <>
                      <p className={styles.title}>{blahg.title}</p>
                      <p className={styles.text}>{blahg.text}</p>
                      <p className={styles.details}>
                        <small>{blahg.author} posted on {new Date(blahg.createdAt).toLocaleDateString()}</small>
                      </p>
                      <button className={styles.cardButton} onClick={() => likeBlahg(blahg._id)}>
                        {blahg.like} {blahg.category}
                      </button>
                    </>
                  )}
                </div>
                <button onClick={() => startEditing(blahg)}>Edit Haiku</button>
              </div>
            ))}
          </div>
        ) : (
          <>No Entries yet! Yet Add One Below this message</>
        )}
      </div>
    </div>
  );
}
