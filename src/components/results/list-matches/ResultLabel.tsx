import { FC } from "react";
import { getChildrenWinner } from "../../../utils/getChildrenWinner";
import { getClassWinner } from "../../../utils/getClassWiner";

interface resultLabelProps {
  winner: string;
  homeTeam: string;
  awayTeam: string;
}

const ResultLabel: FC<resultLabelProps> = ({ winner, homeTeam, awayTeam }) => {
  return (
    <div className="match-result-container">
      <div className={getClassWinner(winner, homeTeam, awayTeam)}>
        {getChildrenWinner(winner, homeTeam, awayTeam)}
      </div>
    </div>
  );
};

export default ResultLabel;
