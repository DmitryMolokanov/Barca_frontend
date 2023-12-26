import { FC } from "react";
import TrophyImg from "./TrophyImg";
import TrophyYears from "./TrophyYears";
interface trophyInfoSelectProps {
  img: string;
  years: string[];
  show: string;
}

const TrophyInfoSelect: FC<trophyInfoSelectProps> = ({ img, years, show }) => {
  return (
    <div
      className="trophy-info-select"
      style={show === "cup" ? { display: "flex" } : { display: "none" }}
    >
      <TrophyImg img={img} />
      <TrophyYears date={years} />
    </div>
  );
};

export default TrophyInfoSelect;
