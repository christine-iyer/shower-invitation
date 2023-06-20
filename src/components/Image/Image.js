import React from 'react'
import shower from '../../newShow.png'
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
                                 <img className='shower' style={{width:'50%'}}  src={shower} alt="fireSpot" /> 
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

