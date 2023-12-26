export interface matches {
  id: number;
  utcDate: string;
  status: string;
  competition: { emblem: string };
  homeTeam: { crest: string; shortName: string; name: string };
  awayTeam: { crest: string; shortName: string; name: string };
  score: {
    fullTime: {
      home: number;
      away: number;
    };
    winner: "DRAW" | "HOME_TEAM" | "AWAY_TEAM";
  };
}

export interface squad {
  dateOfBirth: string;
  id: number;
  name: string;
  nationality: string;
  position: string;
}
export interface playerInfo {
  id: number;
  name: string;
  lastname: string;
  number: number;
  bearthDate: string;
  img: string;
  country: string;
  countryFlag: string;
  teams: [{ team: string; years: string }];
  height: number;
  weight: number;
  allAppearance: number;
  cleanSheets?: number;
  saves?: number;
  goals?: number;
  assist?: number;
}

export interface IligaScore {
  assists: number;
  goals: number;
  penalties: number | null;
  playedMatches: number;
  player: { id: number; name: string };
  team: { crest: string; shortName: string };
}

export interface historyInfo {
  id: number;
  title: string;
  date: string;
  info: string;
  img: string;
  imgDiscription: string;
}

export interface trophy {
  id: number;
  name: string;
  qty: number;
  years: Array<string>;
  img: string;
  side: string;
}
export interface ILegends {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  yearsOfBirth: number;
  yearsPlayed: string;
  matchesPlayed: number;
  goals: number;
  honours: Array<string>;
  imgCard: string;
  imgDiscription: string;
  discription: string;
}
