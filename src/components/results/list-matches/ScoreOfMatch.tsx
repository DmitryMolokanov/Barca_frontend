import { FC } from "react";
import ResultTeam from "./ResultTeam";

interface teamScoreProps {
  homeTeam: string;
  homeImg: string;
  homeScore: number;
  awayScore: number;
  awayTeam: string;
  awayImg: string;
}

const ScoreOfMatch: FC<teamScoreProps> = ({
  homeTeam,
  homeImg,
  homeScore,
  awayScore,
  awayTeam,
  awayImg,
}) => {
  return (
    <div className="score-match-container">
      <ResultTeam name={homeTeam} img={homeImg} />
      <div className="score-container">
        <div>{`${homeScore} - ${awayScore}`}</div>
      </div>
      <ResultTeam
        name={awayTeam}
        img={awayImg}
        direction="row-reverse"
        lineBegins="start"
      />
    </div>
  );
};

export default ScoreOfMatch;
