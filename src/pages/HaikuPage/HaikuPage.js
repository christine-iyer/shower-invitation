import { useState, useEffect } from 'react'
// import '../../App.css'
import { Modal, Button } from 'react-bootstrap';
import CreateHaiku from '../../components/HaikuPage/CreateHaiku';
import HaikuCarousel from '../../components/HaikuPage/HaikuCarousel';
import Buttons from '../../components/HaikuPage/Buttons';
import HaikuCard from '../../components/HaikuPage/HaikuCard';

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
    <div className="HaikuPage">
      <div>



        <button type="btn" onClick={handleShow} className="btn btn--yellow">
  <span className="btn__txt">Write a haiku </span>
  <i className="btn__bg" aria-hidden="true"></i>
  <i className="btn__bg" aria-hidden="true"></i>
  <i className="btn__bg" aria-hidden="true"></i>
  <i className="btn__bg" aria-hidden="true"></i>
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
        updateHaiku={updateHaiku}
        likeHaiku={likeHaiku} />
        </div>
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <h3 style={{textAlign:'center'}}>All Haikus</h3>
    <br></br>
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
          likeHaiku={likeHaiku} />
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