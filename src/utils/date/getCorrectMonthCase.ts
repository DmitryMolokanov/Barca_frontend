export const getCorrectMonthCase = (day: string): string => {
  if (day === "март" || day === "август") {
    return day + "а";
  } else {
    const newCase = day.slice(0, -1);
    return newCase + "я";
  }
};
