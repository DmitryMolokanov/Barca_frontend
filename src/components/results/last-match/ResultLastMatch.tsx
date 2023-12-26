import { FC } from "react";
import { matches } from "../../interface/interface";
import ResultEmblem from "./ResultEmblem";
import ResultTeam from "./ResultTeam";
import DateLastMatch from "./DateLastMatch";
import ScoreLastMatch from "./ScoreLastMatch";

interface matchProps {
  match: matches[];
}

const ResultLastMatch: FC<matchProps> = ({ match }) => {
  return (
    <div className="last-match">
      <ResultEmblem emblem={match[0].competition.emblem} />
      <DateLastMatch date={match[0].utcDate} />
      <div className="matches-container">
        <ResultTeam
          name={match[0].homeTeam.name}
          img={match[0].homeTeam.crest}
          direction="row"
          startContent="end"
        />
        <ScoreLastMatch score={match[0].score.fullTime} />
        <ResultTeam
          name={match[0].awayTeam.name}
          img={match[0].awayTeam.crest}
          direction="row-reverse"
          startContent="start"
        />
      </div>
    </div>
  );
};

export default ResultLastMatch;
