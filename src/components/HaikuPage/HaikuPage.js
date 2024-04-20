import { useState, useEffect } from 'react'
import '..//../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import CreateHaiku from './CreateHaiku';
// import Buttons from './components/Buttons';
// import HaikuCard from './components/HaikuCard';
import HaikuList from './HaikuList';
// import Logo from './components/Logo';
// import Auth from './pages/AuthPage/AuthPage';
// const axios = require('axios')
function HaikuPage() {
  const [haiku, setHaiku] = useState({
    author: '',
    one: '',
    two: '',
    three: '',
    title: '',
    color: '',
    like: 0,
    comment: ''
  })
  const [haikus, setHaikus] = useState([])
  const [foundHaikus, setFoundHaikus] = useState(null)
  // const [item, setItem] = useState(haikus);
// const menuItems = [...new Set(haikus?.map((Val) => Val.author))];
// const filterItem = (curcat) => {
  //   const newItem = haikus?.filter((newVal) => {
  //     return newVal.author === curcat;
  //   });
  //   setItem(newItem);
  // };

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
        title: '',
        color: '',
        like: 0,
        comment: ''
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

  // const getSentimentScore = async () => {
  //   const url = 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
  //       'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
  //     },
  //     body: {
  //       language: 'english',
  //       text: 'Steam dances above, dark elixir soothes the soul,morning\'s gift of life.'
  //     }
  //   };
    
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   getSentimentScore()
  // }, [])



  // if the title field is empty, create a title. The title will be derived an array that contains all the words in the lines. They get jumbled together and then the first two are chosen.
  // const createTitle = async (title) => {}


  return (
    <div className="HaikuPage">
      <div>
    
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
        <h1>Me and You and Our Haikus</h1>
        <HaikuList
          haikus={haikus}
          deleteHaiku={deleteHaiku}
          updateHaiku={updateHaiku}
          likeHaiku={likeHaiku} />

       

        {/*  <h1>Filtable List</h1>
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
          likeHaiku={likeHaiku} /> */}



        
      </div>
      <div>
     
      <svg  viewBox="0 0 841.9 595.3">
        <g fill='none' stroke='#000' strokeWidth='2' transform='translate(180,0)'>
          <path width='100' d="M0,0 C50,40 50,70 20,100,  L0,85 L-20,100 C-50,70 -50,40 0,0"/>

        </g>
      </svg>

      </div>
    </div>
  )

}

export default HaikuPage;