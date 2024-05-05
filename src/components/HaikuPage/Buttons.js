import React from 'react'

export default function Buttons({ filterItem, setItem, menuItems,haikus }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems?.map((Val, _id) => {
          return (
            <button
              className="btn-light text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={_id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          
          onClick={() => setItem(haikus)}
        >
          All
        </button>


      </div>
    </>
  )
}



