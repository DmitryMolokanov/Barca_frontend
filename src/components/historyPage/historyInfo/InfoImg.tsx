import { FC } from "react";

interface InfoImgProps {
  img: string;
  imgDiscription: string | undefined;
}

const InfoImg: FC<InfoImgProps> = ({ img, imgDiscription }) => {
  return (
    <div className="info-img">
      <img src={img} alt="History photo" />
      <figcaption>{imgDiscription}</figcaption>
    </div>
  );
};

export default InfoImg;
