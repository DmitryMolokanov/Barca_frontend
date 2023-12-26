import { FC } from "react";
import { getTime } from "../../utils/date/getTime";

interface timeMatchProps {
  time: string;
}

const TimeMatch: FC<timeMatchProps> = ({ time }) => {
  return (
    <div className="match-time">
      <span>{getTime(time)}</span>
    </div>
  );
};

export default TimeMatch;
