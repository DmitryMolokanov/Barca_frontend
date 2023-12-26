import { FC } from "react";
import { matches } from "../interface/interface";
import ResultEmblem from "../results/last-match/ResultEmblem";
import DateLastMatch from "../results/last-match/DateLastMatch";
import ResultTeam from "../results/list-matches/ResultTeam";
import { getTime } from "../../utils/date/getTime";

interface nextMatchProps {
  match: matches[];
}

const NextMatch: FC<nextMatchProps> = ({ match }) => {
  return (
    <div className="list-match-container">
      <div className="next-mathch-container">
        <span className="title">Следующий матч</span>
        <ResultEmblem emblem={match[0].competition.emblem} />
        <DateLastMatch date={match[0].utcDate} />
        <div className="match-container">
          <ResultTeam
            name={match[0].homeTeam.name}
            img={match[0].homeTeam.crest}
            direction="row"
            lineBegins="end"
          />
          <div className="time">{<span>{getTime(match[0].utcDate)}</span>}</div>
          <ResultTeam
            name={match[0].awayTeam.name}
            img={match[0].awayTeam.crest}
            direction="row-reverse"
            lineBegins="start"
          />
        </div>
      </div>
    </div>
  );
};

export default NextMatch;
