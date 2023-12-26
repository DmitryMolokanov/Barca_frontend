import { FC } from "react";
import { ILegends } from "../interface/interface";
import LegendImgContainer from "./LegendImgContainer";
import LegengDiscription from "./LegengDiscription";

interface LegendsDiscriptionContainerProps {
  playerDiscription: ILegends | undefined;
}

const LegendsDiscriptionContainer: FC<LegendsDiscriptionContainerProps> = ({
  playerDiscription,
}) => {
  return (
    <div className="legend-discription-container">
      <LegendImgContainer
        img={playerDiscription?.imgDiscription}
        name={playerDiscription?.name}
      />
      <LegengDiscription
        name={playerDiscription?.name}
        discription={playerDiscription?.discription}
        honours={playerDiscription?.honours}
      />
    </div>
  );
};

export default LegendsDiscriptionContainer;
