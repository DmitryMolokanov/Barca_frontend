import { FC } from "react";

interface LegengDiscriptionProps {
  name: string | undefined;
  discription: string | undefined;
  honours: Array<string> | undefined;
}
const LegengDiscription: FC<LegengDiscriptionProps> = ({
  name,
  discription,
  honours,
}) => {
  return (
    <div className="legend-discription">
      <span className="legend-discription-name">{name}</span>
      <span>{discription}</span>
      <div className="legend-discription-honors">
        <span className="legend-honor-title">Достижения:</span>
        {honours?.map((honor: string, index) => {
          return (
            <span key={index} className="legend-honor">
              {honor}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LegengDiscription;
