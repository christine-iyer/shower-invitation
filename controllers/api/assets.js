require('dotenv').config()
const Asset = require('../../models/asset')


const axios = require("axios");

const hardcodedData = [
  { symbol: "AMD", purchasePrice: 152.31, shares: 1, principalDate: '10/23/2024' },
  { symbol: "AMD", purchasePrice: 242.54, shares: 4, principalDate: '10/11/2024' },
  { symbol: "AI", purchasePrice: 37.50, shares: 16, principalDate: '11/29/2024' },
  { symbol: "AI", purchasePrice: 22.99, shares: 8, principalDate: '10/03/2024' },
  { symbol: "AI", purchasePrice: 30.21, shares: 25, principalDate: '10/03/2024' },
  { symbol: "GOOGL", purchasePrice: 143.49, shares: 100, principalDate: '12/22/2021' },
  { symbol: "TSLA", purchasePrice: 242.54, shares: 35, principalDate: '11/27/2020' },
  { symbol: "AMZN", purchasePrice: 160.00, shares: 80, principalDate: '11/27/2020' },
  { symbol: "BA", purchasePrice: 188.59, shares: 25, principalDate: '12/14/2022' },
  { symbol: "COIN", purchasePrice: 257.31, shares: 25, principalDate: '12/28/2021' },
  { symbol: "AAPL", purchasePrice: 114.56, shares: 200, principalDate: ' 11/23/2020' },
  { symbol: "AAPL", purchasePrice: 209.20, shares: 10, principalDate: ' 08/05/2024' },
  // { symbol: "CVS", purchasePrice: 89.83, shares: 25, principalDate: '1/11/2023' },
  { symbol: "GS", purchasePrice: 342.94, shares: 10, principalDate: '1/24/2022' },
  { symbol: "MS", purchasePrice: 98.39, shares: 25, principalDate: '12/22/2021' },
  { symbol: "NVDA", purchasePrice: 293.75, shares: 5, principalDate: '12/22/2021' },
  { symbol: "PYPL", purchasePrice: 191.57, shares: 10, principalDate: '12/22/2021' },
  // { symbol: "PFE", purchasePrice: 47.45, shares: 100, principalDate: '11/10/2022' },
  { symbol: "CRM", purchasePrice: 160.38, shares: 20, principalDate: '10/21/2022' },
  // { symbol: "SBUX", purchasePrice: 102.99, shares: 25, principalDate: '12/14/2022' },
  { symbol: "DIS", purchasePrice: 151.93, shares: 10, principalDate: '12/22/2021' },
  // { symbol: "VTI", purchasePrice: 239.05, shares: 10, principalDate: '12/22/2021', },
  { symbol: "LI", purchasePrice: 32.53, shares: 225, principalDate: '11/13/2020' }

];
function get(req, res, next) {
  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
    params: { region: 'US', symbols: 'GOOGL,TSLA,AMZN,BA,COIN,AAPL,GS,MS,NVDA,PYPL,CRM,DIS,LI' },
    headers: {'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63', 'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com' }
  };
  axios.request(options).then(
    response => {
      let results = response.data.quoteResponse.result
      let holdings = []
      for (let i = 0; i < results.length; i++) {
        let shareInfo = [
          results[i].symbol,
          results[i].longName,
          results[i].fullExchangeName,
          results[i].regularMarketPrice
        ]
        holdings.push(shareInfo)
      }
      let mergedData = hardcodedData
        .map((item, i) => Object.assign({}, item, holdings[i]))
        .map(({
          0: symbol,
          1: longName,
          2: fullExchangeName,
          3: regularMarketPrice,
          purchasePrice,
          shares,
          principalDate }) => ({
            symbol,
            longName,
            fullExchangeName,
            regularMarketPrice,
            purchasePrice,
            shares,
            principalDate
          }))
      console.log("This is merged data");
      console.log(mergedData);
      return res.json(mergedData)
      next()
    }
  )
    .catch(function (error) {
      console.error(error);
    });
} 

const assetIndex = (req, res) => {
  res.json(res.locals.data.mergedData)
}

const createAsset = async (req, res, next) => {
  try {
      const createdAsset = await Asset.create(req.body)
      res.locals.data.blahg = createdAsset
      next()
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}
function portfolioIndex (req, res){
     res.json(res.locals.data.results[4])
}
module.exports = {
  get,
  assetIndex, 
  createAsset, 
  portfolioIndex
};

