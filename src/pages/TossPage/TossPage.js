import { useState, useEffect } from 'react'
import CreateToss from "./CreateToss";
import "./toss.css"


export default function TossPage() {
  const [toss, setToss] = useState({
    name: '',
    winner: '',
    margin: 0,
    date: new Date()
  })
  const [tosses, setTosses] = useState([])
  const [foundTosses, setFoundTosses] = useState(null)
  const [error, updateError] = useState();

  const handleChange = (evt) => {
    setToss({ ...toss, [evt.target.name]: evt.target.value })
  }
  const getTosses = async () => {
    try {
      const response = await fetch('/api/tosses')
      const data = await response.json()
      setTosses(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createToss = async () => {
    try {
      const response = await fetch('/api/tosses', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...toss })
      })
      const data = await response.json()
      setFoundTosses(data)
      setToss({
        name: '',
        winner: '',
        margin: 0,
        date: Date
      })
    } catch (error) {
      console.error(error)
    }
  }

  const deleteToss = async (id) => {
    try {
      const response = await fetch(`/api/tosses/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setFoundTosses(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getTosses()
  }, [foundTosses])


  return (
    <div className='franky'>
      <section>
        <h1>Post Shamelessly</h1>
        <div>
          <input
            type='text'
            value={toss.name}
            onChange={handleChange}
            name="name"
            placeholder='Name'
          />

          <select
            value={toss.winner}
            onChange={handleChange}
            name="winner">
            <option >Select a Winner</option>
            <option value="Harris">Harris</option>
            <option value="Trump">Trump</option>
          </select>
          <input type='number' name='margin' onChange={handleChange} value={toss.margin} />
          <input type='date' name='date' onChange={handleChange} value={toss.date} />
          <br />
          <br />
          <button onClick={() => createToss()}>Display your Entry</button>
          <br />
          Entries
        </div>
      </section>
      <hr />


      {tosses && tosses.length ? (
        <div className='entries'>
          {tosses.map((toss) => (
            <div key={toss._id} className="card">
              <div className='cardBody' >
                <p className='title'
                >on {new Date(toss.date).toLocaleDateString()}, {toss.name}  predicts {toss.winner} by {toss.margin}</p>
                <p className='details'>
                  <small>{toss.winner} posted</small>
                </p>

              </div>
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
