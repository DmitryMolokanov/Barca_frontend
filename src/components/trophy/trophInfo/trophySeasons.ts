interface Season {
  years: string[];
}

export const uniqSeason = (seasons: Season[]) => {
  const allAvailableSeason: Array<string> = [];
  seasons.forEach((el) => {
    el.years.forEach((el: string) => {
      allAvailableSeason.push(el);
    });
  });

  const uniq = new Set(allAvailableSeason);
  const arrResult = [...uniq];
  const result = arrResult.sort().reverse();
  return result;
};
