import { FC } from "react";
import { IligaScore } from "../interface/interface";

interface ScoreTbodyProps {
  ligaScore: IligaScore[] | undefined;
}

const ScoreTbody: FC<ScoreTbodyProps> = ({ ligaScore }) => {
  return (
    <tbody>
      {ligaScore?.map((player, index) => {
        return (
          <tr
            key={player.player.id}
            className={player.team.shortName === "Barça" ? "barca-player" : ""}
          >
            <td>{index + 1}</td>
            <td className="score-player-name">{player.player.name}</td>
            <td>
              <div className="club-emblem">
                <img src={player.team.crest} alt="" />
              </div>
            </td>
            <td>{player.playedMatches}</td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
            <td>{(player.goals / player.playedMatches).toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ScoreTbody;
