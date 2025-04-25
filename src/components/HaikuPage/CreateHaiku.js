import styles from './CreateHaiku.module.scss';

export default function CreateHaiku({
  createHaiku,
  haiku,
  handleChange
}) {
  return (
    <>
      <h2>Create A Haiku</h2>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            createHaiku();
          }}
        >
          <div className={styles.formContainer}>
            <select
              aria-label="Select Author"
              value={haiku.author}
              onChange={handleChange}
              name="author"
              className={styles.select}
            >
              <option value="">Author</option>
              <option value="Anon">Anon</option>
              <option value="Chris">Chris</option>
              <option value="Julie">Julie</option>
              <option value="Laura">Laura</option>
              <option value="Leah">Leah</option>
              <option value="Mary">Mary</option>
              <option value="Paul">Paul</option>
              <option value="Lynne">Lynne</option>
              <option value="Shannon">Shannon</option>
            </select>
            <input
              type="text"
              value={haiku.one}
              name="one"
              onChange={handleChange}
              placeholder="Line 1"
              className={styles.input}
            />
            <input
              type="text"
              value={haiku.two}
              name="two"
              onChange={handleChange}
              placeholder="Line 2"
              className={styles.input}
            />
            <input
              type="text"
              value={haiku.three}
              name="three"
              onChange={handleChange}
              placeholder="Line 3"
              className={styles.input}
            />
          </div>
          <button
            className={styles.haikuCreateBtn}
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}