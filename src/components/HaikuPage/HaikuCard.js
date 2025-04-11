import SingleCard from "./SingleCard";
import styles from './SingleCard.module.scss';

const HaikuCard = ({ item, updateHaiku, likeHaiku }) => {
  return (
    <>
      <div className={styles.haikuContainer}>
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