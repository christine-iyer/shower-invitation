import { Form } from 'react-bootstrap';



export default function CreateUser({
  createUser,
  user,
  handleChange
}) {
  
  return (
    <>
      <h2>User Consent</h2>
      <div className='container'>
        <Form style={{ width: '100%', position: 'sticky', float: 'left', fontFamily: 'bradleyHand' }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createUser()
          }}
        >
          <div >
          <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={user.author} name='one' onChange={handleChange} placeholder='Line 1' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={user.consent} name='two' onChange={handleChange} placeholder='Line 2' />
            <Form.Control style={{ backgroundColor: 'rgba( 224,175,155,0.1)' }} type='text' value={user.phone} name='three' onChange={handleChange} placeholder='Line 3' />
         
            <Form.Select style={{ backgroundColor: 'rgba( 224,175,155,0.3)' }} aria-label="Default select example" value={user.author} onChange={handleChange} name="author">
              <option>Author</option>
              <option value="Chris" name="Chris">Chris</option>
              <option value="Julie" name="Julie">Julie</option>
              <option value="Laura" name="Laura">Laura</option>
              <option value="Leah" name="Leah">Leah</option>
              <option value="Mary" name="Mary">Mary</option>
              <option value="Paul" name="Paul">Paul</option>
              <option value="Lynne" name="Lynne">Lynne</option>
            </Form.Select>
            </div>
          <input style={{ color: 'red' }} className='button' type='submit' value='Create User' />
        </Form>
      </div>


    </>
  )
}