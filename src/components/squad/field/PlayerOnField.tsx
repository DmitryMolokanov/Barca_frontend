import { FC } from "react";

interface PlayerOnFieldProps {
  children: React.ReactNode;
  imgSize?: number;
}

const PlayerOnField: FC<PlayerOnFieldProps> = ({ children, imgSize }) => {
  return (
    <div className="player">
      <div
        className="field-player-icon-container"
        style={{ width: `${imgSize}%` }}
      >
        <img src="field\player.png" alt="player-icon" />
      </div>
      <span>{children}</span>
    </div>
  );
};

export default PlayerOnField;
