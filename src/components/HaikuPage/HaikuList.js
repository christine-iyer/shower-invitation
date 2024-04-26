import Haiku from './Haiku'
import '../../App.css'
 

export default function HaikuList ({
  haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku, 
  commentHaiku
}) {
  return (
    <div styles={{position: 'absolute', top: 0, bottom: 0, left: 0}}>

    <ul  style={{ margin: '1rem'}}>
      {
            haikus.length
              ? haikus.map(haiku => (
                


                <Haiku
                  key={haiku._id}

                  haiku={haiku}
                  updateHaiku={updateHaiku}
                  deleteHaiku={deleteHaiku}
                  likeHaiku={likeHaiku}
                  commentHaiku={commentHaiku}
                />
              ))
              : <>
                <h2>No Haikus Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
    
    </div>
  )
}