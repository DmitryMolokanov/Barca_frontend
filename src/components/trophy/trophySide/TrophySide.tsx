import { FC } from "react";
import { trophy } from "../../interface/interface";
import TropyImgQty from "./TropyImgQty";
import TrophyName from "./TrophyName";

interface TrophyLeftsideProps {
  allTrophy: trophy[];
  side: string;
  sideContainer: string;
}

const TrophyLeftside: FC<TrophyLeftsideProps> = ({
  allTrophy,
  side,
  sideContainer,
}) => {
  return (
    <div className={sideContainer}>
      {allTrophy.map((trophy) => {
        if (trophy.side === side)
          return (
            <div className={side} key={trophy.id}>
              <TropyImgQty img={trophy.img} qty={trophy.qty} />
              <TrophyName name={trophy.name} />
            </div>
          );
      })}
    </div>
  );
};

export default TrophyLeftside;
