import { FC } from "react";
interface scoreProps {
  score: {
    home: number;
    away: number;
  };
}

const ScoreLastMatch: FC<scoreProps> = ({ score }) => {
  return (
    <div className="score-container">
      <div>
        <span>{`${score.home} - ${score.away}`}</span>
      </div>
    </div>
  );
};

export default ScoreLastMatch;
