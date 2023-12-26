import React, { FC } from "react";
import "./LastResult.scss";

interface buttonProps {
  handler: () => void;
  side: string;
  children: React.ReactNode;
}

const Button: FC<buttonProps> = ({ side, handler, children }) => {
  return (
    <button className={side} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
