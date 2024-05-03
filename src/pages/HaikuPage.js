import { useState, useEffect } from 'react'
import '../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import CreateHaiku from '../components/HaikuPage/CreateHaiku';
import HaikuCarousel from '../components/HaikuPage/HaikuCarousel';
import HaikuList from '../components/HaikuPage/HaikuList';

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

  // const [sentimentScore, setSentimentScore] = useState(0)
  // const [errorMessage, setErrorMessage] = useState("");



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
    <div className="HaikuPage">
      <div>
        <button style={{ padding:'1%', margin:'1%'}}onClick={handleShow}> <h1>+ </h1>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <CreateHaiku style={{ height: '50%', margin: "5%", width: '80%' }}
              createHaiku={createHaiku}
              haiku={haiku}
              handleChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className='carouselContainer'>
        <h1>Me and You and Our Haikus</h1>
        <HaikuCarousel 
        haikus={haikus}
        deleteHaiku={deleteHaiku}
        updateHaiku={updateHaiku}
        likeHaiku={likeHaiku} />
        </div>
    <div >
        {/* <HaikuList
          haikus={haikus}

          deleteHaiku={deleteHaiku}
          updateHaiku={updateHaiku}
          likeHaiku={likeHaiku} /> */}
          </div>
      </div>
      <div>
      </div>
    </div>
  )

}

export default HaikuPage;