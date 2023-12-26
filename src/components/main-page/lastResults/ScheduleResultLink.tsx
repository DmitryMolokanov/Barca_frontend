import React, { FC } from "react";
interface ScheduleResultLinkProps {
  children: React.ReactNode;
  link: string;
}

const ScheduleResultLink: FC<ScheduleResultLinkProps> = ({
  children,
  link,
}) => {
  return (
    <div className="other-results">
      <a href={link}>{children}</a>
    </div>
  );
};

export default ScheduleResultLink;
