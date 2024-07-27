import "./toss.css"
export default function CreateToss({
  createToss,
  toss,
  handleChange
}) {
  
  return (
    <>
      <h2>Create A Toss</h2>
      <div className='container'>
        <div 
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createToss()
          }}
        >
          <div >
            <select style={{ backgroundColor: 'rgba( 224,175,155,0.3)' }} aria-label="Default select example" value={toss.date} onChange={handleChange} name="author">
              <option>Author</option>
              <option value="Anon" name="Anon">Anon</option>
              <option value="Chris" name="Chris">Chris</option>
              <option value="Julie" name="Julie">Julie</option>
              <option value="Laura" name="Laura">Laura</option>
              <option value="Leah" name="Leah">Leah</option>
              <option value="Mary" name="Mary">Mary</option>
              <option value="Paul" name="Paul">Paul</option>
              <option value="Lynne" name="Lynne">Lynne</option>
              <option value="Shannon" name="Shannon">Shannon</option>
            </select>
            <p style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={toss.name} name='one' onChange={handleChange} placeholder='Line 1' />
            <p style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={toss.winner} name='two' onChange={handleChange} placeholder='Line 2' />
            <p style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={toss.margin} name='three' onChange={handleChange} placeholder='Line 3' />
          </div>
          <button  className='button' type='submit' value='Create Toss'>Create</button>
        </div>
      </div>


    </>
  )
}