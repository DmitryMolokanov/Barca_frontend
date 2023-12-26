export const getTime = (date: string): string => {
  const hours = new Date(date).getHours();
  if (hours === 3) return "N/A";
  let minute = new Date(date).getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hours}:${minute}`;
};
getTime("2023-12-10T00:00:00Z");
