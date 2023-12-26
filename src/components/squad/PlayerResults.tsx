import { FC } from "react";

interface PlayerResultsProps {
  apperance: number | undefined;
  goals: number | undefined;
  assist: number | undefined;
  cleanSheets: number | undefined;
  saves: number | undefined;
}

const PlayerResults: FC<PlayerResultsProps> = ({
  apperance,
  goals,
  assist,
  cleanSheets,
  saves,
}) => {
  return (
    <div className="player-results">
      <div>
        <div className="player-stat-container">
          <img src="players/result-icons/apperance.png" alt="apperance" />
          <span> {apperance}</span>
        </div>
      </div>
      <div>
        <div className="player-stat-container">
          {goals || goals === 0 ? (
            <img src="players/result-icons/goal.png" alt="goal/lock" />
          ) : (
            <img src="players/result-icons/lock.png" />
          )}
          <span> {goals || cleanSheets || 0}</span>
        </div>
      </div>
      <div className="player-stat-container">
        {assist || assist === 0 ? (
          <img src="players/result-icons/assist.png" alt="assist/save" />
        ) : (
          <img src="players/result-icons/save.png" />
        )}
        <span> {assist || saves || 0}</span>
      </div>
    </div>
  );
};

export default PlayerResults;
