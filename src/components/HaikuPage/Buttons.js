import React from 'react'
import './Buttons.css'
export default function Buttons({ filterItem, setItem, menuItems,haikus }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems?.map((Val, _id) => {
          return (
            <button
              className="btn-light text-green p-1 px-1 mx-.125 btn "
              onClick={() => filterItem(Val)}
              key={_id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-1 mx-.125  btn"
          
          onClick={() => setItem(haikus)}
        >
          All
        </button>


      </div>
    </>
  )
}



