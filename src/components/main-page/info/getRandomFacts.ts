interface arrFacts {
  id: number;
  discription: string;
  img: string;
  caption: string;
}

export const getRandomFacts = (arr: arrFacts[]): number => {
  const num = Math.floor(Math.random() * arr.length);
  return num;
};
