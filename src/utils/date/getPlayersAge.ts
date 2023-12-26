export const getplayerAge = (date: string): number => {
  const birthDate = new Date(date);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  return ageInYears;
};
