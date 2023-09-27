import { useState, useEffect, useRef } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from './UploadWidget';
import { Container } from 'react-bootstrap';
import { border } from '@cloudinary/url-gen/qualifiers/background';
// import ReadMore from './ReadMore';
import '../../App.css';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Blahg() {
  const [foundBlahgs, setFoundBlahgs] = useState(null)
  const [blahgs, setBlahgs] = useState([])
  const [blahg, setBlahg] = useState({
    title: '',
    author: '',
    category: '',
    text: '',
    image: '',
    like: 0
  })
  const [showInput, setShowInput] = useState(false)

  const ref = useRef(null)
  const inputRef = useRef(null)
  const handleChange = (evt) => {
    setBlahg({ ...blahg, [evt.target.name]: evt.target.value })
  }
  const getBlahgs = async () => {
    try {
      const response = await fetch('/api/blahgs')
      const data = await response.json()
      setBlahgs(data)
    } catch (error) {
      console.error(error)
    }
  }  
const [showReadMoreButton, setShowReadMoreButton] = useState(false)
  // const deleteBlahg = async (id) => {
  //   try {
  //     const response = await fetch(`/api/blahgs/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const data = await response.json()
  //     setFoundBlahg(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  
  // const updateBlahg = async (id, updatedData) => {
  //   try {
  //     const response = await fetch(`/api/blahgs/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ updatedData })
  //     })
  //     const data = await response.json()
  //     const blahgsCopy = [...blahgs]
  //     const index = blahgsCopy.findIndex(blahg => id === blahg._id)
  //     blahgsCopy[index] = { ...blahgsCopy[index], ...updatedData }
  //     setBlahgs(blahgsCopy)
      

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  const createBlahg = async () => {
    try {
      const response = await fetch('/api/blahgs', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...blahg })
      })
      const data = await response.json()
      setFoundBlahgs(data)
      setBlahg({
        title: '',
        createdDate: '',
        author: '',
        category: '',
        text: '',
        image: '', 
        like: 0
      })
    } catch (error) {
      console.error(error)
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
        body: JSON.stringify(...updatedData)
      })
      const data = await response.json()
      setFoundBlahgs(data)
      const blahgsCopy = [...blahgs]
      const index = blahgsCopy.findIndex(blahg => id === blahg._id)
      blahgsCopy[index] = { ...blahgsCopy[index], ...updatedData }
      setBlahgs(blahgsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBlahgs()
  }, [foundBlahgs])

  const [url, updateUrl] = useState(false);
  const [error, updateError] = useState();
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
    <>
      <section>
        <h1>Post Shamelessly</h1>
        <div>
          <span>
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                function handleOnClick(e) {
                  e.preventDefault();
                  open();
                }
                return (
                  
                  <button style={{ "backgroundColor": 'rgba(162, 134, 109, 0.5)' }} onClick={handleOnClick}><MDBIcon fab icon='instagram' size='xxl'  /></button>
                )
              }}
            </UploadWidget>
            {error && <p>{error}</p>}
            {url && (
              <div key={url._id} className='card' style={{ width: '8rem' }}>
                <img variant="top" src={url} alt='uploaded image' id="uploadedimage" style={{ 'width': 90, "borderRadius": "5%" }}></img>
                <p className="url">{url}</p>
              </div>
            )}
          </span>
          <br></br>
          <br></br>
          <input
            type='text'
            // defaultValue={blahg.title}
            value={blahg.title}
            onChange={handleChange}
            name="title"
            placeholder='Title'
            // onClick={(e) => {
            //   setShowInput(!showInput)
            // }}
          >
          </input>
          <br />
          <input
            value={blahg.author}
            onChange={handleChange}
            name="author"
            placeholder='Author'>
          </input>
          <br />
          <input
            value={blahg.text}
            onChange={handleChange}
            name="text"
            rows={2}
            placeholder='Some meaningful text'>
          </input>
          <br />
          <select
            value={blahg.category}
            onChange={handleChange}
            name="category">
            <option value="🤍">Select a 🤍</option>
            <option value="💛">💛</option>
            <option value="🧡">🧡</option>
            <option value="💚">💚</option>
            <option value="💙">💙</option>
            <option value="💜">💜</option>
            <option value="❤️">❤️</option>
          </select>
          <br />
          <br />
          <button onClick={() => createBlahg()}>Display your Entry</button>
        </div>
      </section>
      <hr></hr>
      {blahgs && blahgs.length ? (
        <Container className='collumns'>
          {/* <Row> */}
          {/* <Col xs={16} md={6}> */}
          {blahgs.map((blahg) => {
            return (
              <MDBCard key={blahg._id} className="w-75 p-3">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage style={{"maxWidth":"100%", "height":"15vw"}}src={blahg.image} alt='...' fluid />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle>{blahg.title}</MDBCardTitle>
                      <MDBCardText onClick={() => setShowInput(!showInput)}>{blahg.text}
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const text = inputRef.current.value
              updateBlahg(blahg._id, { text: text })
              setShowInput(false)
            }
          }}
          defaultValue= {blahg.text}
        />





                       
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>
                          
                          
                          {blahg.author} posted on {new Date(blahg.createdAt).toLocaleDateString()}
                          
                          </small>
                      </MDBCardText>
{/* <button onClick={likeBlahg} >{blahg.category}{blahg.like}</button>  */}

                     {/* <h2 onClick={handleClick} >{blahg.category} </h2> */}
                    
                    
                    
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            )
          }
          )
          }
        </Container>) : <>No Entries yet! Yet Add One Below this message</>
      }
    </>
  )
}
