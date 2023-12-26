import { FC } from "react";
import InfoHeader from "./InfoHeader";
import InfoImg from "./InfoImg";
import InfoText from "./InfoText";
import { historyInfo } from "../../interface/interface";

interface HistoryInfoContainerProps {
  info: historyInfo;
}
const HistoryInfoContainer: FC<HistoryInfoContainerProps> = ({ info }) => {
  return (
    <div className="info-main-container">
      <div className="info-container">
        <InfoHeader>{info?.title}</InfoHeader>
        <div className="info-img-text-container">
          <InfoImg img={info?.img} imgDiscription={info?.imgDiscription} />
          <InfoText>{info.info}</InfoText>
        </div>
      </div>
    </div>
  );
};

export default HistoryInfoContainer;
