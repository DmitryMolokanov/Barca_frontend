export const getDateISO = (date: string): string => {
  const year = new Date(date).getFullYear();
  let month: string | number = new Date(date).getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day: string | number = new Date(date).getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  return `${day}.${month}.${year}`;
};
