import { useState } from 'react';
export default function LikeButton({category, updateBlahg}) {
     const [count, setCount] = useState(0);
   
     function handleClick() {
       setCount(count + 1);
       updateBlahg(count)
     }
   
     return (
       <button onClick={handleClick}>
         {category}{count}
       </button>
     );
   }
   