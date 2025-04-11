import { Form } from 'react-bootstrap'
import styles from './CreateHaiku.module.scss'


export default function CreateHaiku({
  createHaiku,
  haiku,
  handleChange
}) {

  return (
    <>
      <h2>Create A Haiku</h2>
      <div className={styles.containerX}>
        <Form

          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            createHaiku()
          }}
        >
          <div
            className={styles.formContainer}
          >
            <Form.Select
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

              type='text'
              value={haiku.one}
              name='one'
              onChange={handleChange}
              placeholder='Line 1'
            />
            <Form.Control
              className={styles.formControl}
              type='text'
              value={haiku.two}
              name='two'
              onChange={handleChange}
              placeholder='Line 2'
            />
            <Form.Control
              className={styles.formControl}
              type='text'
              value={haiku.three}
              name='three'
              onChange={handleChange}
              placeholder='Line 3'
            />
          </div>
          <button
            className={styles.haikuCreateBtn}
            type='submit'
            value='Create Haiku'
          >
            Create
          </button>
        </Form>
      </div>


    </>
  )
}