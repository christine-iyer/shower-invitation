import { useState, useEffect } from 'react'
import CreateAsset from './CreateAsset';


// const SERVER_URL = "http://localhost:3008/api/portfolio/";

// export default function Roth() {
//   const [asset, setAsset] = useState({
//     symbol: '',
//     purchasePrice: 0.00,
//     shares: '',
//     principalDate: ''
//   })
//   const [mergedData, setMergedData] = useState([]);
//   const [errorMessageR, setErrorMessageR] = useState("");
//   const [showPercentChange, setShowPercentChange] = useState(false);
//   const [totalPercentChange, setTotalPercentChange] = useState(0);

//   const createAsset = async () => {
//     try {
//       const response = await fetch('/api/assets', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...asset })
//       })
//       const data = await response.json()
//       setAssets([data, ...assets])
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setAsset({
//         symbol: '',
//         purchasePrice: 0,
//         shares: '',
//         principalDate: ''
//       })
//     }
//   }
//   const handleChange = (evt) => {
//     setAsset({ ...asset, [evt.target.name]: evt.target.value })
//   }
//   const getMergedData = async () => {
//     try {
//       const response = await fetch(SERVER_URL);
//       const data = await response.json();
//       setMergedData(data);
//       console.log(data);
//     } catch (e) {
//       console.error(e);
//       setErrorMessageR(e.message);
//     }
//   };

//   const calculateTotalPurchasePrice = (data) => {
//     return data.reduce((total, stock) => total + (stock.purchasePrice * stock.shares), 0).toFixed(2);
//   };

//   const calculateTotalPercentChange = (data) => {
//     const totalPurchasePrice = data.reduce((total, stock) => total + (stock.purchasePrice * stock.shares), 0);
//     const totalMarketValue = data.reduce((total, stock) => total + (stock.regularMarketPrice * stock.shares), 0);
//     const percentChange = ((totalMarketValue - totalPurchasePrice) / totalPurchasePrice) * 100;
//     return percentChange.toFixed(2);
//   };
  

//   const handlePercentChangeClick = () => {
//     const percentChange = calculateTotalPercentChange(mergedData);
//     setTotalPercentChange(percentChange);
//     setShowPercentChange(true);
//   };
//   const formatDollarAmount = (amount) => {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
//   };

//   useEffect(() => { }, []);

//   const totalPurchasePrice = calculateTotalPurchasePrice(mergedData);
//   const totalMarketValue = mergedData.reduce((total, stock) => total + (stock.regularMarketPrice * stock.shares), 0).toFixed(2);

//   return (
//     <div className="App">
//       <CreateAsset createAsset={createAsset} asset={asset} handleChange={handleChange} />
//       <header className="App-header">
//         <div>
//           <button type='submit' onClick={getMergedData}> $

//           </button>
//         </div>
//         <div>
//           <div className='cass'>
//             <div className='happy'>
//               {mergedData && mergedData.length ? (
//                 mergedData.map(data => (
//                   <p key={data?.symbol} blog={data}>
//                     {data.symbol + ' ' +
//                       (data.regularMarketPrice * data.shares).toFixed(2) +
//                       '... you paid ' +
//                       (data.purchasePrice * data.shares).toFixed(2) +
//                       '... a  ' +
//                       (
//                         (
//                           (data.regularMarketPrice * data.shares) -
//                           (data.purchasePrice * data.shares)
//                         ) /
//                         (data.purchasePrice * data.shares) * 100
//                       ).toFixed(2)
//                       + '%'}
//                   </p>
//                 ))
//               ) : (
//                 <h2>Click $ for your portfolio</h2>
//               )}
//             </div>
//             <div>
//               <h3>Total Purchase Price: {formatDollarAmount(totalPurchasePrice)}</h3>
//               <h3>Total Market Value: {formatDollarAmount(totalMarketValue)}</h3>

//             </div>
//             <div>
//               <button onClick={handlePercentChangeClick}>
//                 %△
//               </button>
//               {showPercentChange && (
//                 <h3>{totalPercentChange}%</h3>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from 'react'


// import './style.css'


export default function AssetPage() {
  const [asset, setAsset] = useState({
    symbol: '',
    purchasePrice: 0.00,
    shares: 0,
    principalDate: ''
   
  })
  const [assets, setAssets] = useState([])
  const [foundAssets, setFoundAssets] = useState(null)
const [error, updateError] = useState();

  const handleChange = (evt) => {
    setAsset({ ...asset, [evt.target.name]: evt.target.value })
  }
  const getAssets = async () => {
    try {
      const response = await fetch('/api/assets')
      const data = await response.json()
      setAssets(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createAsset = async () => {
    try {
      const response = await fetch('/api/assets', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...asset })
      })
      const data = await response.json()
      setFoundAssets(data)
      setAsset({
        symbol: '',
        purchasePrice: 0.00,
        shares: 0,
        principalDate: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  


  useEffect(() => {
    getAssets()
  }, [foundAssets])

  return (
    <div className='franky'>
     <CreateAsset/>
      <hr />
      {assets && assets.length ? (
        <div className='entries'>
          {assets.map((asset) => (
            <div key={asset._id} className="card">
              <img className="cardImage" src={asset.image} alt='...' />
              <div className='cardBody'>
                <p className='title'>{asset.title}</p>
                {/* <p className='text' onClick={() => setShowInput(!showInput)}>{asset.text}
                  <input
                    ref={inputRef}
                    style={{ display: showInput ? 'block' : 'none' }}
                    type='text'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        updateAsset(asset._id, { text: e.target.value });
                        setShowInput(false);
                      }
                    }}
                    defaultValue={asset.text}
                  />
                </p> */}
                <p className='details'>
                  <small>{asset.author} posted on {new Date(asset.createdAt).toLocaleDateString()}</small>
                </p>
                <button className="cardButton" onClick={() => likeAsset(asset._id)}>{asset.like} {asset.category}</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>No Entries yet! Yet Add One Below this message</>
      )}
    </div>
  );
  

  
    ;
}
