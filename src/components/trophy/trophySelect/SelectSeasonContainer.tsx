import { FC } from "react";
import { trophy } from "../../interface/interface";
interface SelectSeasonContainerProps {
  trophy: trophy;
}

const SelectSeasonContainer: FC<SelectSeasonContainerProps> = ({ trophy }) => {
  return (
    <div className="each-trophy-block" key={trophy.id}>
      <div className="trophy-img-container">
        <img src={trophy.img} alt="cup-img" />
      </div>
      <span className="each-trophy-title">{trophy.name}</span>
    </div>
  );
};

export default SelectSeasonContainer;
