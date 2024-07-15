
import AdultFlipCard from '../../components/AdultGames/AdultFlipCard';
import KidsFlipCard from '../../components/KidsGame/KidsFlipCard'

export default function Games(){


     return (
          <div>
               <h1>Games</h1>
               <button>Show Kids</button>
               <br></br>
               <button>Show Adult</button>
               <AdultFlipCard/>
        <KidsFlipCard />
        
        
          </div>
     )
}