export default function CreateToss({
  createToss,
  haiku,
  handleChange
}) {
  
  return (
    <>
      <h2>Create A Toss</h2>
      <div className='container'>
        <Form style={{ width: '100%', position: 'sticky', float: 'left', fontFamily: 'bradleyHand' }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createToss()
          }}
        >
          <div >
            <Form.Select style={{ backgroundColor: 'rgba( 224,175,155,0.3)' }} aria-label="Default select example" value={haiku.author} onChange={handleChange} name="author">
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
            </Form.Select>
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.one} name='one' onChange={handleChange} placeholder='Line 1' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.two} name='two' onChange={handleChange} placeholder='Line 2' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.three} name='three' onChange={handleChange} placeholder='Line 3' />
          </div>
          <button  className='button' type='submit' value='Create Toss'>Create</button>
        </Form>
      </div>


    </>
  )
}