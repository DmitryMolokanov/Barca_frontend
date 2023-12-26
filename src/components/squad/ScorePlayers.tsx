import { FC } from "react";
import ScoreThead from "./ScoreThead";
import ScoreTbody from "./ScoreTbody";
import { IligaScore } from "../interface/interface";

interface ScoreTbodyProps {
  ligaScore: IligaScore[] | undefined;
}

const ScorePlayers: FC<ScoreTbodyProps> = ({ ligaScore }) => {
  return (
    <div className="liga-scores">
      <div className="liga-scores-header">
        <span>Лучшие бомбардиры лиги</span>
      </div>
      <table>
        <ScoreThead />
        <ScoreTbody ligaScore={ligaScore} />
      </table>
    </div>
  );
};

export default ScorePlayers;
