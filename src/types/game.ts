export interface IGame {
  _id: string;
  name: string;
  genre: string;
  img: string;
  price: string;
  rating: number;
  description: string;
  age: string;
  platform: string[];
  selected: boolean;
  date?: string;
}

export interface INewGameData {
  name: string;
  genre: string;
  description: string;
  price: string;
  age: string;
  img: string;
  platform: string[];
}
