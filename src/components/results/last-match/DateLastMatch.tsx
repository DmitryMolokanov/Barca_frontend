import { FC } from "react";
import { getCorrectMonthCase } from "../../../utils/date/getCorrectMonthCase";

interface dateProps {
  date: string;
}

const DateLastMatch: FC<dateProps> = ({ date }) => {
  const weekday = new Date(date).toLocaleString("default", {
    weekday: "long",
  });
  const month = new Date(date).toLocaleString("default", {
    month: "long",
  });
  const dateNum = new Date(date).getDate();

  return (
    <div className="date-container">
      <span>{weekday}</span>
      <span>{dateNum}</span>
      <span>{getCorrectMonthCase(month)}</span>
    </div>
  );
};

export default DateLastMatch;
