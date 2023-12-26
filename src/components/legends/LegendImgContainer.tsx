import { FC } from "react";

interface LegendImgContainerProps {
  img: string | undefined;
  name: string | undefined;
}

const LegendImgContainer: FC<LegendImgContainerProps> = ({ img, name }) => {
  return (
    <div className="legend-discription-img-container">
      <img src={img} alt={name} />
    </div>
  );
};

export default LegendImgContainer;
