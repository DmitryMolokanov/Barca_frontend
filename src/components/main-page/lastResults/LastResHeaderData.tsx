import { FC } from "react";

interface lastResultsProps {
  date: string;
}

const LastResHeaderData: FC<lastResultsProps> = ({ date }) => {
  return (
    <div className="match-date">
      <div className="date">
        <span>{new Date(date).getDate()}</span>
      </div>
      <div className="day-month">
        <span className="day">
          {new Date(date).toLocaleString("default", {
            weekday: "long",
          })}
        </span>{" "}
        <span className="month">
          {new Date(date).toLocaleString("default", {
            month: "long",
          })}
        </span>
      </div>
    </div>
  );
};

export default LastResHeaderData;
