import { Form } from 'react-bootstrap'
import './HaikuStyles.css'
// import '../../App.css'


export default function CreateHaiku({
  createHaiku,
  haiku,
  handleChange
}) {
  
  const buttonStyle = {
    fontFamily: "Noto Sans JP, sans-serif !important",
    fontSize: "0.9rem !important",
    padding: "0.4rem 0.8rem !important",
    border: "1px solid #d4a5a5 !important",
    borderRadius: "4px !important",
    background: "rgba(212, 165, 165, 0.7) !important",
    color: "#2c3e50 !important",
    cursor: "pointer !important",
    opacity: "0.9 !important",
    margin: "0.7rem auto !important",
    display: "block !important",
    maxWidth: "150px !important",
    width: "auto !important",
    height: "auto !important",
    minHeight: "auto !important"
  };

  const inputStyle = {
    backgroundColor: "rgba(224,175,155,0.1) !important",
    marginBottom: "10px !important",
    maxWidth: "300px !important",
    margin: "0 auto 10px auto !important",
    width: "100% !important",
    textAlign: "center !important"
  };
  
  return (
    <>
      <h2>Create A Haiku</h2>
      <div className='container-x'>
        <Form 
          style={{ 
            width: '100% !important', 
            fontFamily: 'bradleyHand !important',
            display: 'flex !important',
            flexDirection: 'column !important',
            alignItems: 'center !important'
          }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createHaiku()
          }}
        >
          <div style={{ 
            width: '100% !important', 
            maxWidth: '300px !important',
            display: 'flex !important',
            flexDirection: 'column !important',
            alignItems: 'center !important'
          }}>
            <Form.Select 
              style={{ 
                backgroundColor: 'rgba(224,175,155,0.3) !important',
                marginBottom: '10px !important',
                maxWidth: '300px !important',
                margin: '0 auto 10px auto !important',
                width: '100% !important',
                textAlign: 'center !important'
              }} 
              aria-label="Default select example" 
              value={haiku.author} 
              onChange={handleChange} 
              name="author"
            >
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
            <Form.Control 
              style={inputStyle} 
              type='text' 
              value={haiku.one} 
              name='one' 
              onChange={handleChange} 
              placeholder='Line 1' 
            />
            <Form.Control 
              style={inputStyle} 
              type='text' 
              value={haiku.two} 
              name='two' 
              onChange={handleChange} 
              placeholder='Line 2' 
            />
            <Form.Control 
              style={inputStyle} 
              type='text' 
              value={haiku.three} 
              name='three' 
              onChange={handleChange} 
              placeholder='Line 3' 
            />
          </div>
          <button  
            className='haiku-create-btn' 
            type='submit' 
            value='Create Haiku'
            style={buttonStyle}
          >
            Create
          </button>
        </Form>
      </div>


    </>
  )
}