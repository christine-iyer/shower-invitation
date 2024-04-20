import { Form } from 'react-bootstrap';



export default function CreateHaiku({
  createHaiku,
  haiku,
  handleChange
}) {
  
  return (
    <>
      <h2>Create A Haiku</h2>
      <div className='container'>
        <Form style={{ width: '100%', position: 'sticky', float: 'left', fontFamily: 'bradleyHand' }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createHaiku()
          }}
        >
          <div >
            <Form.Select style={{ backgroundColor: 'rgba( 224,175,155,0.3)' }} aria-label="Default select example" value={haiku.author} onChange={handleChange} name="author">
              <option>Author</option>
              <option value="Chris" name="Chris">Chris</option>
              <option value="Claire" name="Claire">Claire</option>
              <option value="Laura" name="Laura">Laura</option>
              <option value="Leah" name="Leah">Leah</option>
              <option value="Paul" name="Paul">Paul</option>
              <option value="Lynne" name="Lynne">Lynne</option>
            </Form.Select>
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.one} name='one' onChange={handleChange} placeholder='Line 1' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.two} name='two' onChange={handleChange} placeholder='Line 2' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.three} name='three' onChange={handleChange} placeholder='Line 3' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={haiku.title} name='title' onChange={handleChange} placeholder='Optional title' />
            <Form.Control style={{ backgroundColor: haiku.color }} type="color" id="exampleColorInput" value={haiku.color} name="color" defaultValue="#E84545" title="Choose your color" onChange={handleChange} />
          </div>
          <input style={{ color: 'red' }} className='button' type='submit' value='Create Haiku' />
        </Form>
      </div>


    </>
  )
}