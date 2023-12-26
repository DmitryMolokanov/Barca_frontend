import { FC } from "react";
interface TrophyImgProps {
  img: string;
}

const TrophyImg: FC<TrophyImgProps> = ({ img }) => {
  return (
    <div className="trophy-info-img">
      <img src={img} alt="" />
    </div>
  );
};

export default TrophyImg;
