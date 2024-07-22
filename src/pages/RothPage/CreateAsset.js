export default function CreateAsset(
     {  createAsset,
          asset,
          handleChange}
){
     return (
          <div>
               <h2>Create a New Entry</h2>
               <form onSubmit={(e) => {
                    e.preventDefault()
                    createAsset()
               }}>
                    <input
                         type='text'
                         value={asset.symbol}
                         onChange={handleChange}
                         name='asset'
                         placeholder='Asset'
                    />
                    <input
                         type='text'
                         value={asset.purchasePrice}
                         onChange={handleChange}
                         name='purchasePrice'
                         placeholder='Purchase Price'
                    />
                     <input
                         type='number'
                         value={asset.shares}
                         onChange={handleChange}
                         name='purchasePrice'
                         placeholder='Purchase Price'
                    />
                    <input
                         type='text'
                         value={asset.principalDate}
                         onChange={handleChange}
                         name='text'
                         placeholder='Purchase Date'
                    />
                    
                    <button type='submit'>Submit</button>
               </form>
          </div>
     )

}