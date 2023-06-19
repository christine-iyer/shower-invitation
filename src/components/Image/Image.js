import React from 'react'
import kai from './kai.png'
import styles from './Image.module.scss'

const Image = () => {
  return (
     <div className='container'>
     <div className='flex-child one'>
     <div className='five'>
         <div className='two'>
             <div className='six'>
                 <div className='three'>
                     <div className='seven'>
                         <div className='four'>
                             <div className='eight'>
                                 <img className='kai' style={{width:'100%'}}  src={kai} alt="fireSpot" /> 
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 </div>
  )
}

export default Image

