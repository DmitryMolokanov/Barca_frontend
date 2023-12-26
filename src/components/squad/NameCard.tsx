import { FC, useContext } from "react";
import { positionCardPlayer } from "../context";

interface nameCardProps {
  name: string;
  lastname: string;
  number: number;
}

const NameCard: FC<nameCardProps> = ({ name, lastname, number }) => {
  const { setPlayerInfoLeft } = useContext(positionCardPlayer);

  function hiddenCardPlayer() {
    setPlayerInfoLeft(0);
  }
  return (
    <div className="player-name-container">
      <span className="player-card-name">{name}</span>
      <span className="player-card-lastname">{lastname}</span>
      <div className="player-number">{number}</div>
      <button className="back" onClick={hiddenCardPlayer}>
        &#11164;
      </button>
    </div>
  );
};

export default NameCard;
