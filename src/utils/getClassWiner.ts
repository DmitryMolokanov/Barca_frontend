export const getClassWinner = (
  result: string,
  homeTeam: string,
  awayTeam: string
): string => {
  if (result === "DRAW") return "match-result-draw";
  if (result === "HOME_TEAM" && homeTeam === "FC Barcelona") {
    return "match-result-won";
  }
  if (result === "AWAY_TEAM" && awayTeam === "FC Barcelona") {
    return "match-result-won";
  }
  return "match-result-loss";
};
