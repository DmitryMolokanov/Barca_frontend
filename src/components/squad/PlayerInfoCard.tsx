import { FC } from "react";
import ImgCard from "./ImgCard";
import NameCard from "./NameCard";
import DiscriptionCard from "./DiscriptionCard";
import PlayerResults from "./PlayerResults";
import { playerInfo } from "../interface/interface";

interface PlayerInfoCardProps {
  player: playerInfo;
  position: number;
  showCard: string;
}

const PlayerInfoCard: FC<PlayerInfoCardProps> = ({
  player,
  position,
  showCard,
}) => {
  return (
    <div
      className="player-info-container"
      style={{ left: `${position}%`, display: showCard }}
    >
      <div className="player-info-top">
        <ImgCard img={player?.img} name={player?.name} />
        <NameCard
          name={player?.name}
          lastname={player?.lastname}
          number={player?.number}
        />
      </div>
      <DiscriptionCard
        birth={player?.bearthDate}
        country={player?.country}
        flag={player?.countryFlag}
        teams={player?.teams}
        height={player?.height}
        weight={player?.weight}
      />
      <PlayerResults
        apperance={player?.allAppearance}
        goals={player?.goals}
        cleanSheets={player?.cleanSheets}
        assist={player?.assist}
        saves={player?.saves}
      />
    </div>
  );
};

export default PlayerInfoCard;
