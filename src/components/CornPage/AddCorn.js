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
            <div className={styles.formContainerYellow}>
              <div className={styles.formGroup}>
                <label htmlFor="yellowRaw">Raw Corn in Lbs</label>
                <input
                  type="number"
                  id="yellowRaw"
                  value={corn.yellowRaw}
                  name="yellowRaw"
                  onChange={handleChange}
                  placeholder="Enter amount in lbs"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="yellowCooked">Cooked Tortillas and Chips</label>
                <input
                  type="number"
                  id="yellowCooked"
                  value={corn.yellowCooked}
                  name="yellowCooked"
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="yellowProduction">Production Time (minutes)</label>
                <input
                  type="number"
                  id="yellowProduction"
                  value={corn.yellowProduction}
                  name="yellowProduction"
                  onChange={handleChange}
                  placeholder="Enter time in minutes"
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* White Corn Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>White Corn</h3>
            <div className={styles.formContainerWhite}>
              <div className={styles.formGroup}>
                <label htmlFor="whiteRaw">Raw Corn in Lbs</label>
                <input
                  type="number"
                  id="whiteRaw"
                  value={corn.whiteRaw}
                  name="whiteRaw"
                  onChange={handleChange}
                  placeholder="Enter amount in lbs"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="whiteCooked">Cooked Tortillas and Chips</label>
                <input
                  type="number"
                  id="whiteCooked"
                  value={corn.whiteCooked}
                  name="whiteCooked"
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="whiteProduction">Production Time (minutes)</label>
                <input
                  type="number"
                  id="whiteProduction"
                  value={corn.whiteProduction}
                  name="whiteProduction"
                  onChange={handleChange}
                  placeholder="Enter time in minutes"
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Blue Corn Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Blue Corn</h3>
            <div className={styles.formContainerBlue}>
              <div className={styles.formGroup}>
                <label htmlFor="blueRaw">Raw Corn in Lbs</label>
                <input
                  type="number"
                  id="blueRaw"
                  value={corn.blueRaw}
                  name="blueRaw"
                  onChange={handleChange}
                  placeholder="Enter amount in lbs"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="blueCooked">Cooked Tortillas and Chips</label>
                <input
                  type="number"
                  id="blueCooked"
                  value={corn.blueCooked}
                  name="blueCooked"
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="blueProduction">Production Time (minutes)</label>
                <input
                  type="number"
                  id="blueProduction"
                  value={corn.blueProduction}
                  name="blueProduction"
                  onChange={handleChange}
                  placeholder="Enter time in minutes"
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Setup and Cleanup Times */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Times</h3>
            <div className={styles.formContainer}>
              <div className={styles.formGroup}>
                <label htmlFor="setUpTime">Set Up Time (minutes)</label>
                <input
                  type="number"
                  id="setUpTime"
                  value={corn.setUpTime}
                  name="setUpTime"
                  onChange={handleChange}
                  placeholder="Enter time in minutes"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cleanUpTime">Clean Up Time (minutes)</label>
                <input
                  type="number"
                  id="cleanUpTime"
                  value={corn.cleanUpTime}
                  name="cleanUpTime"
                  onChange={handleChange}
                  placeholder="Enter time in minutes"
                  className={styles.input}
                />
              </div>
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
