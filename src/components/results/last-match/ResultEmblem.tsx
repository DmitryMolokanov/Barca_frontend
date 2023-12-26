import { FC } from "react";

interface emblemProps {
  emblem: string;
}

const ResultEmblem: FC<emblemProps> = ({ emblem }) => {
  return (
    <div className="competition-logo">
      <img src={emblem} alt="emblem" />
    </div>
  );
};

export default ResultEmblem;
