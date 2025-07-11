import { useState, useEffect } from 'react';
import styles from './RothPage.module.scss';


// const SERVER_URL = "http://localhost:3008/api/portfolio/";

function RothPage() {
  const [asset, setAsset] = useState({
    symbol: '',
    purchasePrice: 0,
    shares: 0,
    principalDate: ''
})
const handleChange = (event) => {
  setAsset({ ...asset, [event.target.name]: event.target.value })
}
  const [mergedData, setMergedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPercentChange, setShowPercentChange] = useState(false);
  const [totalPercentChange, setTotalPercentChange] = useState(0);

  const getMergedData = async () => {
    try {
      const response = await fetch('/api/assets');
      const data = await response.json();
      setMergedData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
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

        </div>
        <div>
          <button className={styles.button}type='submit' onClick={getMergedData}> $

          </button>
        </div>
        <div>
          <div className={styles.page}>
            <div className={styles.assets}>
              {mergedData && mergedData.length ? (
                mergedData.map(data => (
                  <p className={styles.card}key={data?.symbol} blog={data}>
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
                <h2 className={styles.prompt}>Click $ for your portfolio</h2>
              )}
            </div>
            <div>
              <h3 className ={styles.calculations}>Total Purchase Price: {formatDollarAmount(totalPurchasePrice)}</h3>
              <h3 className ={styles.calculations}>Total Market Value: {formatDollarAmount(totalMarketValue)}</h3>

            </div>
            <div>
              <button className={styles.button} onClick={handlePercentChangeClick}>
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

export default RothPage;
