import styles from './AddCorn.module.scss';

export default function AddCorn({
  corn,
  handleChange,
  addCorn
}) {
  return (
    <>
      <h2>Add Corn</h2>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            addCorn();
          }}
        >
          {/* Yellow Corn Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Yellow Corn</h3>
            <div className={styles.formContainer}>
              <input
                type="number"
                value={corn.yellowRaw}
                name="yellowRaw"
                onChange={handleChange}
                placeholder="Yellow Raw"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.yellowCooked}
                name="yellowCooked"
                onChange={handleChange}
                placeholder="Yellow Cooked"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.yellowProduction}
                name="yellowProduction"
                onChange={handleChange}
                placeholder="Yellow Production"
                className={styles.input}
              />
            </div>
          </div>

          {/* White Corn Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>White Corn</h3>
            <div className={styles.formContainer}>
              <input
                type="number"
                value={corn.whiteRaw}
                name="whiteRaw"
                onChange={handleChange}
                placeholder="White Raw"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.whiteCooked}
                name="whiteCooked"
                onChange={handleChange}
                placeholder="White Cooked"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.whiteProduction}
                name="whiteProduction"
                onChange={handleChange}
                placeholder="White Production"
                className={styles.input}
              />
            </div>
          </div>

          {/* Blue Corn Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Blue Corn</h3>
            <div className={styles.formContainer}>
              <input
                type="number"
                value={corn.blueRaw}
                name="blueRaw"
                onChange={handleChange}
                placeholder="Blue Raw"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.blueCooked}
                name="blueCooked"
                onChange={handleChange}
                placeholder="Blue Cooked"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.blueProduction}
                name="blueProduction"
                onChange={handleChange}
                placeholder="Blue Production"
                className={styles.input}
              />
            </div>
          </div>

          {/* Setup and Cleanup Times */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Times</h3>
            <div className={styles.formContainer}>
              <input
                type="number"
                value={corn.setUpTime}
                name="setUpTime"
                onChange={handleChange}
                placeholder="Set Up Time"
                className={styles.input}
              />
              <input
                type="number"
                value={corn.cleanUpTime}
                name="cleanUpTime"
                onChange={handleChange}
                placeholder="Clean Up Time"
                className={styles.input}
              />
            </div>
          </div>

          <button
            className={styles.submitBtn}
            type="submit"
          >
            Add Corn
          </button>
        </form>
      </div>
    </>
  );
}
