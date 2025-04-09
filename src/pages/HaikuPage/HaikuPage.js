import { useState, useEffect } from 'react'
import '../../App.css'
import { Modal, Button } from 'react-bootstrap';
import CreateHaiku from '../../components/HaikuPage/CreateHaiku';
import HaikuCarousel from '../../components/HaikuPage/HaikuCarousel';
import Buttons from '../../components/HaikuPage/Buttons';
import HaikuCard from '../../components/HaikuPage/HaikuCard';
import './HaikuPage.css';

function HaikuPage() {
  const [haiku, setHaiku] = useState({
    author: '',
    one: '',
    two: '',
    three: '',
    like: 0
  })
  const [haikus, setHaikus] = useState([])
  const [foundHaikus, setFoundHaikus] = useState(null)
  const [item, setItem] = useState(haikus);
  const menuItems = [...new Set(haikus?.map((Val) => Val.author))];
  const filterItem = (curcat) => {
    const newItem = haikus?.filter((newVal) => {
      return newVal.author === curcat;
    });
    setItem(newItem);
  };

  const handleChange = (event) => {
    setHaiku({ ...haiku, [event.target.name]: event.target.value })
  }
  const [show, setShow] = useState(false);
  const [showAD, setShowAD] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowA = () => setShowAD(false);
  const handleShowD = () => setShowAD(true);

  const createHaiku = async () => {
    try {
      const response = await fetch('/api/haikus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...haiku })
      })
      const data = await response.json()
      setHaikus([data, ...haikus])
    } catch (error) {
      console.error(error)
    } finally {
      setHaiku({
        author: '',
        one: '',
        two: '',
        three: '',
        like: 0
      })
    }
  }
  const likeHaiku = async (id) => {
    try {
      const index = haikus.findIndex((haiku) => haiku._id === id)
      const haikusCopy = [...haikus]
      const subject = haikusCopy[index]
      subject.like = subject.like + 1
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject)
      })
      const likedHaiku = await response.json()
      const likedHaikusCopy = [likedHaiku, ...haikus]
      setHaikus(likedHaikusCopy)
      setHaikus(haikusCopy)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteHaiku = async (id) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const haikusCopy = [...haikus]
      const index = haikusCopy.findIndex(haiku => id === haiku._id)
      haikusCopy.splice(index, 1)
      setHaikus(haikusCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateHaiku = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const haikusCopy = [...haikus]
      const index = haikusCopy.findIndex(haiku => id === haiku._id)
      haikusCopy[index] = { ...haikusCopy[index], ...updatedData }
      setHaikus(haikusCopy)

    } catch (error) {
      console.error(error)
    }
  }



  const listHaikus = async () => {
    try {
      const response = await fetch('/api/haikus', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setHaikus(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    listHaikus()
  }, [foundHaikus])
  return (
    <div className="haiku-page">
      <div className="haiku-header">
        <h1 className="main-title">俳句の庭</h1>
        <p className="subtitle">Haiku Garden</p>
      </div>

      <div className="haiku-content">
        <div className="create-section">
          <button type="btn" onClick={handleShow} className="create-btn">
            <span className="btn-text">新しい俳句を書く</span>
            <span className="btn-text-en">Write a New Haiku</span>
          </button>
        </div>

        <Modal show={show} onHide={handleClose} className="haiku-modal">
          <Modal.Body>
            <CreateHaiku
              createHaiku={createHaiku}
              haiku={haiku}
              handleChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="carousel-section">
          <h2 className="section-title">Featured Haikus</h2>
          <HaikuCarousel
            haikus={haikus}
            updateHaiku={updateHaiku}
            likeHaiku={likeHaiku}
          />
        </div>

        <div className="all-haikus-section">
          <h2 className="section-title">All Haikus</h2>
          <Buttons
            haikus={haikus}
            item={item}
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <HaikuCard
            haikus={haikus}
            item={item}
            filterItem={filterItem}
            deleteHaiku={deleteHaiku}
            updateHaiku={updateHaiku}
            likeHaiku={likeHaiku}
          />
        </div>
      </div>
    </div>
  )
}

export default HaikuPage;