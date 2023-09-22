import { useState } from 'react';
export default function LikeButton({category}) {
     const [count, setCount] = useState(0);
   
     function handleClick() {
       setCount(count + 1);
     }
   
     return (
       <button onClick={handleClick}>
         {category}{count}
       </button>
     );
   }
   