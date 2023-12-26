import { FC } from "react";

interface TropyImgQtyProps {
  img: string;
  qty: number;
}

const TropyImgQty: FC<TropyImgQtyProps> = ({ img, qty }) => {
  return (
    <div className="trophy-img-qty">
      <div className="trophy-img">
        <img src={img} alt="trofy" />
      </div>
      <div className="trophy-qty">{qty}</div>
    </div>
  );
};

export default TropyImgQty;
