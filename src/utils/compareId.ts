// import { playerInfo } from "../components/interface/interface";

export const compareId = (id: number, playersInfo: any[]): boolean => {
  const result = playersInfo.find((allId) => allId.id === id);
  if (result) return true;
  return false;
};
