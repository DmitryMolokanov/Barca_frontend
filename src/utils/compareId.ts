import { playerInfo } from "../components/interface/interface";

export const compareId = (id: number, playersInfo: playerInfo[]): boolean => {
  const result = playersInfo?.find((allId) => allId.id === id);
  if (result) return true;
  return false;
};
