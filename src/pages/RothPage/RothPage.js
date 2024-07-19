import { useState, useEffect } from 'react';



const SERVER_URL = "http://localhost:3008/api/portfolio/";

export default function Roth() {
  const [mergedData, setMergedData] = useState([]);
  const [errorMessageR, setErrorMessageR] = useState("");
  const [showPercentChange, setShowPercentChange] = useState(false);
  const [totalPercentChange, setTotalPercentChange] = useState(0);

  const getMergedData = async () => {
    try {
      const response = await fetch(SERVER_URL);
      const data = await response.json();
      setMergedData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
      setErrorMessageR(e.message);
    }
  };

  const calculateTotalPurchasePrice = (data) => {
    return data.reduce((total, stock) => total + (stock.purchasePrice * stock.shares), 0).toFixed(2);
  };

  const calculateTotalPercentChange = (data) => {
    const totalPurchasePrice = data.reduce((total, stock) => total + (stock.purchasePrice * stock.shares), 0);
    const totalMarketValue = data.reduce((total, stock) => total + (stock.regularMarketPrice * stock.shares), 0);
    const percentChange = ((totalMarketValue - totalPurchasePrice) / totalPurchasePrice) * 100;
    return percentChange.toFixed(2);
  };
  

  const handlePercentChangeClick = () => {
    const percentChange = calculateTotalPercentChange(mergedData);
    setTotalPercentChange(percentChange);
    setShowPercentChange(true);
  };
  const formatDollarAmount = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  useEffect(() => { }, []);

  const totalPurchasePrice = calculateTotalPurchasePrice(mergedData);
  const totalMarketValue = mergedData.reduce((total, stock) => total + (stock.regularMarketPrice * stock.shares), 0).toFixed(2);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type='submit' onClick={getMergedData}> $

          </button>
        </div>
        <div>
          <div className='cass'>
            <div className='happy'>
              {mergedData && mergedData.length ? (
                mergedData.map(data => (
                  <p key={data?.symbol} blog={data}>
                    {data.symbol + ' ' +
                      (data.regularMarketPrice * data.shares).toFixed(2) +
                      '... you paid ' +
                      (data.purchasePrice * data.shares).toFixed(2) +
                      '... a  ' +
                      (
                        (
                          (data.regularMarketPrice * data.shares) -
                          (data.purchasePrice * data.shares)
                        ) /
                        (data.purchasePrice * data.shares) * 100
                      ).toFixed(2)
                      + '%'}
                  </p>
                ))
              ) : (
                <h2>Click $ for your portfolio</h2>
              )}
            </div>
            <div>
              <h3>Total Purchase Price: {formatDollarAmount(totalPurchasePrice)}</h3>
              <h3>Total Market Value: {formatDollarAmount(totalMarketValue)}</h3>

            </div>
            <div>
              <button onClick={handlePercentChangeClick}>
                %△
              </button>
              {showPercentChange && (
                <h3>{totalPercentChange}%</h3>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

