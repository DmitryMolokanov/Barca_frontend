import { FC } from "react";
import { ILegends } from "../interface/interface";
import InfoLegend from "./InfoLegend";
interface CardLegendsProps {
  legends: ILegends[];
  getId: (id: number) => void;
}

const CardLegends: FC<CardLegendsProps> = ({ legends, getId }) => {
  return (
    <div className="players-list">
      {legends.map((player) => {
        return (
          <div
            className="player-card"
            key={player.id}
            onClick={() => getId(player.id)}
          >
            <div className="player-card-img">
              <img src={player.imgCard} alt={player.name} />
              <InfoLegend player={player} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardLegends;
