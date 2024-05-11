import { useState, useEffect } from 'react'
import '../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import User from '../components/HaikuPage/User';
import SignUpForm from '../components/HaikuPage/SignUpForm';
function UserPage() {
  const [user, setUser] = useState({
    author: '',
    consent: '',
    phone: ''
  })
  const [users, setUsers] = useState([])
  const [foundUsers, setFoundUsers] = useState(null)
  
  
  // const [sentimentScore, setSentimentScore] = useState(0)
  // const [errorMessage, setErrorMessage] = useState("");



  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const [show, setShow] = useState(false);
  const [showAD, setShowAD] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowA = () => setShowAD(false);
  const handleShowD = () => setShowAD(true);

  const createUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...user })
      })
      const data = await response.json()
      setUsers([data, ...users])
    } catch (error) {
      console.error(error)
    } finally {
      setUser({
        author: '',
        consent: '',
        phone: ''
      })
    }
  }
  

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const usersCopy = [...users]
      const index = usersCopy.findIndex(user => id === user._id)
      usersCopy.splice(index, 1)
      setUsers(usersCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateUser = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const usersCopy = [...users]
      const index = usersCopy.findIndex(user => id === user._id)
      usersCopy[index] = { ...usersCopy[index], ...updatedData }
      setUsers(usersCopy)
   
    } catch (error) {
      console.error(error)
    }
  }



  const listUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    listUsers()
  }, [foundUsers])



  return (
    <div className="UserPage">
      <div>
        <SignUpForm />

        <button style={{ padding:'1%', margin:'1%'}}onClick={handleShow}> <h1>+ </h1>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <User style={{ height: '50%', margin: "5%", width: '80%' }}
              createUser={createUser}
              user={user}
              handleChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className='carouselContainer'>
        <h1>Me and You and Our Users</h1>
        
        </div>
    <div >
  
       
          </div>
     
      </div>
      <div>
      </div>
    </div>
  )

}

export default UserPage;