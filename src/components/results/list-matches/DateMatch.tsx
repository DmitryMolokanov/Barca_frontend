import { FC } from "react";
import { getDateISO } from "../../../utils/date/getDateISO";

interface dateMatchProps {
  date: string;
}

const DateMatch: FC<dateMatchProps> = ({ date }) => {
  return <div className="date-match">{getDateISO(date)}</div>;
};

export default DateMatch;
