import { useState, useEffect } from 'react'
import '../App.css'

// import User from '../components/HaikuPage/User';
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
        <SignUpForm user={user} setUser={setUser} onChange={handleChange}/>

     


     
      </div>
   
    </div>
  )

}

export default UserPage;