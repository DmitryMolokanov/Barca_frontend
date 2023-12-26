import { FC } from "react";
interface TrophyInfoProps {
  name: string;
}

const TrophyName: FC<TrophyInfoProps> = ({ name }) => {
  return <div className="trophy-name">{name}</div>;
};

export default TrophyName;
