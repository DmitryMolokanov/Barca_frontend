import { createContext } from "react";
type ContextType = {
  playerInfoLeft: number;
  setPlayerInfoLeft: React.Dispatch<React.SetStateAction<number>>;
};

export const positionCardPlayer = createContext<ContextType>({
  playerInfoLeft: 0,
  setPlayerInfoLeft: () => {},
});
