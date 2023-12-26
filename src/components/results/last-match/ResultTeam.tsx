import { FC } from "react";

interface homeProps {
  name: string;
  img: string;
  direction: "row-reverse" | "row";
  startContent: "start" | "end";
}

const ResultHomeTeam: FC<homeProps> = ({
  name,
  img,
  direction,
  startContent,
}) => {
  return (
    <div
      className="team"
      style={{ flexDirection: direction, justifyContent: startContent }}
    >
      <span>{name}</span>
      <div className="logo">
        <img src={img} alt="team-logo" />
      </div>
    </div>
  );
};

export default ResultHomeTeam;
