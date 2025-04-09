import SingleCard from "./SingleCard";
import './HaikuStyles.css';

const HaikuCard = ({ item, updateHaiku, likeHaiku }) => {
  return (
    <>
      <div className="haikuContainer">
        {item?.map((Val) => {
          return (
            <SingleCard 
              key={Val._id}
              Val={Val}
              updateHaiku={updateHaiku}
              likeHaiku={likeHaiku}
            />
          );
        })}
      </div>
    </>
  );
};

export default HaikuCard;