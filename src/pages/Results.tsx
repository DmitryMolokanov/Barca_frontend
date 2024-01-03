import { useEffect, useState } from "react";
import Header from "../components/main-page/header/Header";
import { matches } from "../components/interface/interface";
import "../components/results/Result.scss";
import ResultLastMatch from "../components/results/last-match/ResultLastMatch";
import ScoreOfMatch from "../components/results/list-matches/ScoreOfMatch";
import ResultLabel from "../components/results/list-matches/ResultLabel";
import DateMatch from "../components/results/list-matches/DateMatch";
import LogoCompetition from "../components/results/list-matches/LogoCompetition";
import Modal from "../components/UI/Modal";
import ErrReqLimit from "../components/UI/ErrReqLimit";
import Footer from "../components/UI/Footer";

const Results = () => {
  const [season, setSeason] = useState<matches[]>([]);
  const [hiddenModal, setHiddenModal] = useState<boolean>(true);

  async function getSeasonResults() {
    try {
      const response = await fetch(
        "http://barca-server-myapp.ru/season_results"
      );
      const result = await response.json();
      setSeason(result.reverse());
    } catch (err) {
      if (err) {
        setHiddenModal(false);
      }
    }
  }
  function handlerModal(e: React.MouseEvent) {
    const target = e.target as Element;
    if (target.classList.contains("modal")) return setHiddenModal(true);
  }

  useEffect(() => {
    getSeasonResults();
  }, []);

  return (
    <div>
      <Header />
      {season.length > 0 ? <ResultLastMatch match={season} /> : null}
      <div className="list-matches-container">
        <div className="matches-container">
          {season.map((match) => {
            return (
              <div className="match" key={match.id}>
                <DateMatch date={match.utcDate} />
                <LogoCompetition logo={match.competition.emblem} />
                <ScoreOfMatch
                  homeTeam={match.homeTeam.name}
                  homeImg={match.homeTeam.crest}
                  homeScore={match.score.fullTime.home}
                  awayScore={match.score.fullTime.away}
                  awayTeam={match.awayTeam.name}
                  awayImg={match.awayTeam.crest}
                />
                <ResultLabel
                  winner={match.score.winner}
                  homeTeam={match.homeTeam.name}
                  awayTeam={match.awayTeam.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Modal hiddenModal={hiddenModal} handlerModal={handlerModal}>
        <ErrReqLimit />
      </Modal>
    </div>
  );
};

export default Results;
