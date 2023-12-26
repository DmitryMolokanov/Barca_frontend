import { FC } from "react";
import { playerInfo, squad } from "../interface/interface";
import { getplayerAge } from "../../utils/date/getPlayersAge";
import { playersInfo } from "./playersInfo";
import { compareId } from "../../utils/compareId";
interface TablePlayersProps {
  players: squad[];
  playerInfo: (info: playerInfo) => void;
}

const TablePlayers: FC<TablePlayersProps> = ({ players, playerInfo }) => {
  function getPlayerInfo(id: number) {
    const info = playersInfo.find((player) => {
      return player.id === id;
    });
    playerInfo(info);
  }
  function showPlayer(currId: number, allId: playerInfo) {
    if (!compareId(currId, allId)) return;
    getPlayerInfo(currId);
  }

  return (
    <table className="list-of-players">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Позиция</th>
          <th>Национальность</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => {
          return (
            <tr
              key={player.id}
              className={
                compareId(player.id, playersInfo)
                  ? "player-active"
                  : "player-not-active"
              }
              onClick={() => {
                showPlayer(player.id, playersInfo);
              }}
            >
              <td>{player.name}</td>
              <td>{getplayerAge(player.dateOfBirth)}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablePlayers;
