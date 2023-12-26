import { FC } from "react";
import { trophy } from "../../interface/interface";

interface trophySelectProps {
  trophy: trophy[];
  getTrophy: (name: string) => void;
  setShowSeasonOrCup: (x: string) => void;
}

const TrophySelect: FC<trophySelectProps> = ({
  trophy,
  getTrophy,
  setShowSeasonOrCup,
}) => {
  return (
    <div className="select-cups">
      <select
        defaultValue={"Вырбать турнир"}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          getTrophy(e.target.value);
          setShowSeasonOrCup("cup");
        }}
      >
        <option disabled hidden>
          Вырбать турнир
        </option>
        {trophy.map((cup) => {
          return <option key={cup.id}>{cup.name}</option>;
        })}
      </select>
    </div>
  );
};

export default TrophySelect;
