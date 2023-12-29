export const getplayerAge = (date: string): number => {
  const birthDate = Number(new Date(date));
  const currentDate = Number(new Date());
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  return ageInYears;
};
