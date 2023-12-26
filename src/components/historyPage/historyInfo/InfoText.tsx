import { FC } from "react";
interface InfoTextProps {
  children: React.ReactNode;
}

const InfoText: FC<InfoTextProps> = ({ children }) => {
  return (
    <div className="info-text">
      <span>{children}</span>
    </div>
  );
};

export default InfoText;
