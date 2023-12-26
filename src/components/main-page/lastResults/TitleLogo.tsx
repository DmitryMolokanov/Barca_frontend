import { FC } from "react";

interface titleProps {
  title: string;
}
const TitleLogo: FC<titleProps> = ({ title }) => {
  return (
    <div className="result-liga-title">
      <img src={title} alt="" />
    </div>
  );
};

export default TitleLogo;
