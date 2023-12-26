import { useState, useEffect } from "react";
import "./LastResult.scss";
import LastResHeaderData from "./LastResHeaderData";
import TitleLogo from "./TitleLogo";
import LogoScore from "./LogoScore";
import Button from "./Button";
import ScheduleResultLink from "./ScheduleResultLink";
import { matches } from "../../interface/interface";

const LastResults = () => {
  const [position, setPosition] = useState(-1000);
  const [closeMatces, setCloseMatches] = useState([]);

  async function getCloseMatches() {
    const response = await fetch("http://localhost:7000/last_matches");
    const result = await response.json();

    setCloseMatches(result);
  }
  useEffect(() => {
    getCloseMatches();
  }, []);

  function shiftLeft() {
    const newPosition = position + 1000;
    if (newPosition > 0) return;
    setPosition(newPosition);
  }
  function shiftRight() {
    const newPosition = position - 1000;
    if (newPosition < -2000) return;
    setPosition(newPosition);
  }

  return (
    <div className="last-result-container">
      <Button side="left" handler={shiftLeft}>
        left
      </Button>
      <Button side="right" handler={shiftRight}>
        right
      </Button>
      <div className="carusel" style={{ left: `${position}px` }}>
        <ScheduleResultLink link="/results">
          View all results
        </ScheduleResultLink>

        {closeMatces.map((match: matches) => {
          return (
            <div className="match-container" key={match.id}>
              <LastResHeaderData date={match.utcDate} />
              <div className="result-container">
                <TitleLogo title={match.competition.emblem} />
                <LogoScore
                  homeTeamImg={match.homeTeam.crest}
                  homeTeamName={match.homeTeam.shortName}
                  awayTeamImg={match.awayTeam.crest}
                  awayTeamName={match.awayTeam.name}
                  status={match.status}
                  scoreHome={match.score.fullTime.home}
                  scoreAway={match.score.fullTime.away}
                  utcDate={match.utcDate}
                />
              </div>
            </div>
          );
        })}
        <ScheduleResultLink link="/schedule">
          Schedule of future matches
        </ScheduleResultLink>
      </div>
    </div>
  );
};

export default LastResults;
