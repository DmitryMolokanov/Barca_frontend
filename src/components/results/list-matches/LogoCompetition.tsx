import { FC } from "react";
interface logoCompetitionProps {
  logo: string;
}

const LogoCompetition: FC<logoCompetitionProps> = ({ logo }) => {
  return (
    <div className="competition-logo">
      <img src={logo} alt="competition-logo" />
    </div>
  );
};

export default LogoCompetition;
