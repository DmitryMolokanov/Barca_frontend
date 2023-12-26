import { useEffect, useState } from "react";
import Header from "../components/main-page/header/Header";
import { matches } from "../components/interface/interface";
import "../components/schedule/Schedule.scss";
import NextMatch from "../components/schedule/NextMatch";
import DateMatch from "../components/results/list-matches/DateMatch";
import LogoCompetition from "../components/results/list-matches/LogoCompetition";
import ResultTeam from "../components/results/list-matches/ResultTeam";
import TimeMatch from "../components/schedule/TimeMatch";
import Modal from "../components/UI/Modal";
import ErrReqLimit from "../components/UI/ErrReqLimit";

const Schedule = () => {
  const [schedule, setSchedule] = useState<matches[]>([]);
  const [hiddenModal, setHiddenModal] = useState<boolean>(true);

  async function getSchedule() {
    try {
      const response = await fetch("http://localhost:7000/season_schedual");
      const result = await response.json();
      console.log(result);
      setSchedule(result);
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
    getSchedule();
  }, []);

  return (
    <div className="schedual">
      <Header />
      {schedule.length > 0 ? <NextMatch match={schedule} /> : null}
      <div className="list-schedule-container">
        <div className="matches-container">
          {schedule.map((match) => {
            return (
              <div className="match-container">
                <DateMatch date={match.utcDate} />
                <TimeMatch time={match.utcDate} />
                <LogoCompetition logo={match.competition.emblem} />
                <div className="match">
                  <ResultTeam
                    name={match.homeTeam.name}
                    img={match.homeTeam.crest}
                  />
                  <div className="match-vs">
                    <span>VS</span>
                  </div>
                  <ResultTeam
                    name={match.awayTeam.name}
                    img={match.awayTeam.crest}
                    direction="row-reverse"
                    lineBegins="start"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal hiddenModal={hiddenModal} handlerModal={handlerModal}>
        <ErrReqLimit />
      </Modal>
    </div>
  );
};

export default Schedule;
