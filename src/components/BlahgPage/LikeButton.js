import { useState } from 'react';
export default function LikeButton({blahg, updateBlahg}) {
     const [addLike, setAddLike] = useState(0);
   
     function handleLike() {
       setAddLike(addLike + 1);
       updateBlahg(blahg._id, {like: addLike})
     }
   
     return (
       <button onClick={handleLike} style={{"color": "rgb(0,0,4)", "backgroundColor": "rgba(150,150,1,0", "textIndent":"right"}}>
         {addLike}
       </button>
     );
   }
   