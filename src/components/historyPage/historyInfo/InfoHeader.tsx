import { FC } from "react";

interface InfoHeaderProps {
  children: React.ReactNode;
}

const InfoHeader: FC<InfoHeaderProps> = ({ children }) => {
  return (
    <div className="info-header">
      <h1>{children}</h1>
    </div>
  );
};

export default InfoHeader;
