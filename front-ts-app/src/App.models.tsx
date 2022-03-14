import { ReactElement } from 'react';

export interface AppRoute {
  path: string;
  component: ReactElement<any, any>;
}

export interface Error {
  status: number;
  message: string;
}

export interface Player {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[]
  }
}

interface RatioCountry {
  country: string;
  win: number;
  game: number;
  ratio: number;
}

interface PlayerStat {
  id: number;
  firstname: string;
  lastname: string;
  IMC: number;
}

export interface Stats {
  ratioCountry: RatioCountry[],
  IMC: {
    averageIMC: number,
    players: PlayerStat[]
  },
  height: {
    heights: number[],
    median: number
  }
}