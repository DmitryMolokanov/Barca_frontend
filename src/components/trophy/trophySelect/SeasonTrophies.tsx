import { FC } from "react";
import SelectSeasonContainer from "./SelectSeasonContainer";
import { trophy } from "../../interface/interface";

interface SeasonTrophiesProps {
  season: string | undefined;
  seasonTrophy: trophy[];
  show: string;
}

const SeasonTrophies: FC<SeasonTrophiesProps> = ({
  season,
  seasonTrophy,
  show,
}) => {
  return (
    <div
      className="season-trophy-container"
      style={show === "season" ? { display: "flex" } : { display: "none" }}
    >
      <div className="date-season">Сезон {season}</div>
      <div className="each-trophy-conteiner">
        {seasonTrophy.map((trophy: trophy) => {
          return <SelectSeasonContainer trophy={trophy} />;
        })}
      </div>
    </div>
  );
};

export default SeasonTrophies;
