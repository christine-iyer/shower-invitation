import {useState} from 'react'

function DataPicker() {
     const [data, setData] = useState([
          "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/lies.csv",
          "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/data.csv",
          "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/newdata.csv"
     ])
  return (
    <div>DataPicker
    <h3>pich a category</h3>
    <select name="category">Pick One
     <option value="one">  One   </option>
     <option value="two">  Two   </option>
     <option value="three">  Three   </option>
    </select>
    <h3>pich a data source</h3>
    
    </div>
  )
}

export default DataPicker