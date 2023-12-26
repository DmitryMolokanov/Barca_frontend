import { FC } from "react";
import { ILegends } from "../interface/interface";
interface InfoLegendProps {
  player: ILegends;
}

const InfoLegend: FC<InfoLegendProps> = ({ player }) => {
  return (
    <figcaption className="player-card-name">
      <span className="player-name">{player.name}</span>
      <span> Дата рождения: {player.dateOfBirth}</span>
      <span>
        Сезоны за Барсу:
        <br /> {player.yearsPlayed}
      </span>
      <span> Игр за Барсу: {player.matchesPlayed}</span>
      <span> Голов за Барсу: {player.goals}</span>
      <span>Позиция: {player.position}</span>
    </figcaption>
  );
};

export default InfoLegend;
