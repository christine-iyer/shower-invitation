import React from 'react'
import styles from './Buttons.module.scss'

export default function Buttons({ filterItem, setItem, menuItems, haikus }) {
  return (
    <>
      <div className={styles.buttonContainer}>
        {menuItems?.map((Val, _id) => {
          return (
            <button
              className={styles.filterButton}
              onClick={() => filterItem(Val)}
              key={_id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className={styles.filterButton}
          onClick={() => setItem(haikus)}
        >
          All
        </button>
      </div>
    </>
  )
}



