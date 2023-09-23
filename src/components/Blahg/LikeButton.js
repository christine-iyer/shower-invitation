import { useState } from 'react';
export default function LikeButton({category, updateBlahg}) {
     const [like, setLike] = useState(0);
   
     function handleClick() {
       setLike(like + 1);
       updateBlahg(like)
     }
   
     return (
       <button style={{"color": "rgb(0,0,4)", "backgroundColor": "rgba(150,150,1,0", "textIndent":"right"}}onClick={handleClick}>
         {category}{like}
       </button>
     );
   }
   