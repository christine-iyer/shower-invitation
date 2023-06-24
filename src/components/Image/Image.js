import React from 'react'
import shower from '../../newShow.png'
import email from './email.png'
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
                                 <img className='email' style={{width:'50%'}}  src={email} alt="fireSpot" /> 
                             
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

