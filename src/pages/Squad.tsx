import { useEffect, useState } from "react";
import Header from "../components/main-page/header/Header";
import "../components/squad/Squad.scss";
import { squad } from "../components/interface/interface";
import { IligaScore } from "../components/interface/interface";
import { playerInfo } from "../components/interface/interface";
import TablePlayers from "../components/squad/TablePlayers";
import PlayerInfoCard from "../components/squad/PlayerInfoCard";
import { positionCardPlayer } from "../components/context";
import ScorePlayers from "../components/squad/ScorePlayers";
import StartSquad from "../components/squad/field/StartSquad";
import Modal from "../components/UI/Modal";
import ErrReqLimit from "../components/UI/ErrReqLimit";

const Squad = () => {
  const [squad, setSquad] = useState<squad[]>([]);
  const [player, setPlayer] = useState<playerInfo>();
  const [showPlayerInfo, setShowPlayerInfo] = useState("none");
  const [playerInfoLeft, setPlayerInfoLeft] = useState<number>(0);
  const [ligaScore, setLigaScore] = useState<IligaScore[]>();
  const [hiddenModal, setHiddenModal] = useState<boolean>(true);

  async function getSquad() {
    try {
      const response = await fetch("https://barca-server-myapp.ru:7000/squad");
      const result = await response.json();
      setSquad(result.squad);
      setShowPlayerInfo("flex");
    } catch (err) {
      if (err) {
        setHiddenModal(false);
      }
    }
  }

  async function getLigaScore() {
    const response = await fetch("https://barca-server-myapp.ru:7000/score");
    const result = await response.json();
    setLigaScore(result);
  }

  function getPlayerInfo(info: playerInfo) {
    setPlayer(info);
    setPlayerInfoLeft(35);
  }

  function handlerModal(e: React.MouseEvent) {
    const target = e.target as Element;
    if (target.classList.contains("modal")) return setHiddenModal(true);
  }

  useEffect(() => {
    getSquad();
    getLigaScore();
  }, []);

  return (
    <div>
      <Header />
      <div className="player-list-container">
        <positionCardPlayer.Provider
          value={{ playerInfoLeft, setPlayerInfoLeft }}
        >
          <TablePlayers players={squad} playerInfo={getPlayerInfo} />
          <PlayerInfoCard
            player={player!}
            position={playerInfoLeft}
            showCard={showPlayerInfo}
          />
        </positionCardPlayer.Provider>
        <StartSquad />
        <ScorePlayers ligaScore={ligaScore} />
      </div>
      <Modal hiddenModal={hiddenModal} handlerModal={handlerModal}>
        <ErrReqLimit />
      </Modal>
    </div>
  );
};

export default Squad;
