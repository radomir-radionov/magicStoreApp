export interface IGameState {
  topGames: IGame[];
  games: IGame[];
}

export interface IGame {
  _id: string;
  name: string;
  genre: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  age: string;
  platform: string[];
  selected: boolean;
  date?: string;
}
