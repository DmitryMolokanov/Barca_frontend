import { FC } from "react";

interface imgCardProps {
  img: string | undefined;
  name: string | undefined;
}

const ImgCard: FC<imgCardProps> = ({ img, name }) => {
  return (
    <div className="img-container">
      <img src={img} alt={name} />
    </div>
  );
};

export default ImgCard;
