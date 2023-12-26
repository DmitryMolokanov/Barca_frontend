import { FC } from "react";
interface TrophyYearsProps {
  date: Array<string>;
}
const TrophyYears: FC<TrophyYearsProps> = ({ date }) => {
  return (
    <div className="trophy-info-years">
      <span>Годы чемпионства:</span>
      <div className="years">
        {date?.map((years) => {
          return <span key={years}>{years}</span>;
        })}
      </div>
    </div>
  );
};

export default TrophyYears;
