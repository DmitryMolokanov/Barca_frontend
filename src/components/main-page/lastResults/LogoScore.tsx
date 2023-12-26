import { FC } from "react";
import { getTime } from "../../../utils/date/getTime";

interface logoScoreProps {
  homeTeamImg: string;
  homeTeamName: string;
  awayTeamName: string;
  awayTeamImg: string;
  status: string;
  scoreHome: number;
  scoreAway: number;
  utcDate: string;
}

const LogoScore: FC<logoScoreProps> = ({
  homeTeamImg,
  homeTeamName,
  awayTeamImg,
  awayTeamName,
  status,
  scoreHome,
  scoreAway,
  utcDate,
}) => {
  return (
    <div className="match-score-conteiner">
      <div className="teams-score-container">
        <div>
          <img src={homeTeamImg} alt="team-logo" />
        </div>
        <div>
          <div className="score">
            {status === "FINISHED" ? (
              <span className="finished">{`${scoreHome}-${scoreAway}`}</span>
            ) : (
              <span className="future">{getTime(utcDate)}</span>
            )}
          </div>
        </div>
        <div>
          <img src={awayTeamImg} alt="team-logo" />
        </div>
      </div>
      <div className="teams">
        <span>{`${homeTeamName} vs ${awayTeamName}`}</span>
      </div>
    </div>
  );
};

export default LogoScore;
