export const getChildrenWinner = (
  result: string,
  homeTeam: string,
  awayTeam: string
): string => {
  if (result === "DRAW") return "Draw";
  if (result === "HOME_TEAM" && homeTeam === "FC Barcelona") {
    return "Won";
  }
  if (result === "AWAY_TEAM" && awayTeam === "FC Barcelona") {
    return "Won";
  }
  return "Loss";
};
