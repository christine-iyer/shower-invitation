import { useState, useEffect, useRef } from 'react'
import UploadWidget from '../../components/BlahgPage/UploadWidget';
import './style.css'

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

  const deleteBlahg = async (id) => {
    try {
      const response = await fetch(`/api/blahgs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      // const blahgsCopy = [...blahgs]
      // const index = blahgsCopy.findIndex(blahg => id === blahg._id)
      // blahgsCopy.splice(index, 1)
      // setBlahgs(blahgsCopy)
      setFoundBlahgs(data)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBlahg = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/blahgs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()

      const blahgsCopy = [...blahgs]
      const index = blahgsCopy.findIndex(blahg => id === blahg._id)
      blahgsCopy[index] = { ...blahgsCopy[index], ...updatedData }
      setBlahgs(blahgsCopy)
    } catch (error) {
      console.error(error)
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
    <div className='franky'>
      <section>
        <h1>Post Shamelessly</h1>
        <div className='create'>
          <span>
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                function handleOnClick(e) {
                  e.preventDefault();
                  open();
                }
                return (
                  <button
                    style={{
                      backgroundColor: 'rgba(162, 134, 109, 0.5)',
                      marginBottom: '9px',
                      padding: '1em 2em', // Increase padding for larger button
                      fontSize: '1.2rem',  // Increase font size
                      borderRadius: '5px', // Round corners
                      cursor: 'pointer',
                    }}
                    onClick={handleOnClick}
                  >
                    Upload a Photo
                  </button>
                );
              }}
            </UploadWidget>
            {error && <p>{error}</p>}
            {url && (
              <div key={url._id} className='card' style={{ width: '8rem', marginBottom: '1px', backgroundColor: 'red' }}>
                <img variant="top" src={url} alt='' id="uploadedimage" />
              </div>
            )}
          </span>
          <input
            type='text'
            value={blahg.title}
            onChange={handleChange}
            name="title"
            placeholder='Title'
          />
          <br />
          <input
            value={blahg.author}
            onChange={handleChange}
            name="author"
            placeholder='Author'
          />
          <br />
          <input
            value={blahg.text}
            onChange={handleChange}
            name="text"
            rows={2}
            placeholder='Some meaningful text'
          />
          <br />
          <select
            value={blahg.category}
            onChange={handleChange}
            name="category"
          >
            <option value="🤍 Frankly Franky">Select a 🤍</option>
            <option value="💛 Janky Franky">💛 Janky Franky</option>
            <option value="🧡 Franky Panky">🧡 Franky Panky</option>
            <option value="💚 Cranky Franky">💚 Cranky Franky</option>
            <option value="💙 Franky 🌙">💙 Franky 🌙</option>
            <option value="💜 Swanky Franky">💜 Swanky Franky</option>
            <option value="❤️ C'est la vie, Franky!">❤️ C'est la vie, Franky!</option>
          </select>
          <br />
          <br />
          <button onClick={() => createBlahg()}>Display your Entry</button>
          <br />

        </div>
      </section>

      <h1>Entries</h1>
      {blahgs && blahgs.length ? (
        <div className='cards'>
          {blahgs.map((blahg) => (
            <div key={blahg._id} className="card">
              <div className="imageContainer">
                <img className="image" src={blahg.image} alt='...' />
              </div>
              <div className='textContainer'>
                <p className='title'>{blahg.title}</p>
                <p className='text' onClick={() => setShowInput(!showInput)}>{blahg.text}
                  <input
                    ref={inputRef}
                    style={{ display: showInput ? 'block' : 'none' }}
                    type='text'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const text = inputRef.current.value
                        updateBlahg(blahg._id, { text });
                        setShowInput(false);
                      }
                    }}
                    defaultValue={blahg.text}
                  />
                </p>
              </div>
              <p className='details'>
                <small>{blahg.author} posted on {new Date(blahg.createdAt).toLocaleDateString()}</small>
              </p>
              <button className="cardButton" onClick={() => likeBlahg(blahg._id)}>{blahg.like} {blahg.category}</button>

            </div>
          ))}
        </div>
      ) : (
        <>No Entries yet! Yet Add One Below this message</>
      )}
    </div>

  );



  ;
}
