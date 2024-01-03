import { useEffect, useState } from "react";
import "./Standings.scss";
import Modal from "../../UI/Modal";
import ErrReqLimit from "../../UI/ErrReqLimit";

interface standingsTeam {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}

interface standingTable {
  id: number;
  draw: number;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  won: number;
  team: standingsTeam;
}

const Standings = () => {
  const [standings, setStandings] = useState<standingTable[]>([]);
  const [hiddenModal, setHiddenModal] = useState<boolean>(true);

  async function getData() {
    try {
      const response = await fetch(
        "https://barca-server-myapp.ru:7000/standings"
      );
      const result = await response.json();
      setStandings(result.standings[0].table);
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
    getData();
  }, []);

  return (
    <div className="standings-container">
      <table className="team-container">
        <thead>
          <tr>
            <th>Position</th>
            <th></th>
            <th>Team</th>
            <th>Points</th>
            <th>Matches played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Goals for</th>
            <th>Goals against</th>
            <th>Goals difference</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((el: standingTable) => {
            return (
              <tr
                key={el.team.id}
                className={el.team.shortName === "Barça" ? "barca" : ""}
              >
                <td style={{ fontWeight: 600 }}>{el.position}</td>
                <td>
                  <div className="team-logo">
                    <img src={el.team.crest} alt="logo" />
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>{el.team.shortName}</td>
                <td style={{ fontWeight: 600 }}>{el.points}</td>
                <td>{el.playedGames}</td>
                <td>{el.won}</td>
                <td>{el.draw}</td>
                <td>{el.lost}</td>
                <td>{el.goalsFor}</td>
                <td>{el.goalsAgainst}</td>
                <td>{el.goalDifference}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal hiddenModal={hiddenModal} handlerModal={handlerModal}>
        <ErrReqLimit />
      </Modal>
    </div>
  );
};

export default Standings;
