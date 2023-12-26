import { FC } from "react";

interface teamProps {
  name: string;
  img: string;
  direction?: "row" | "row-reverse";
  lineBegins?: "start" | "end";
}

const ResultTeam: FC<teamProps> = ({ name, img, direction, lineBegins }) => {
  return (
    <div
      className="team-container"
      style={{ flexDirection: direction, justifyContent: lineBegins }}
    >
      <div className="team">{name}</div>
      <div className="logo">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ResultTeam;
