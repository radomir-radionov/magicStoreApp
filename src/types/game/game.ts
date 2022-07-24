export interface IGameState {
  topGames: IGame[];
  searchedGames: IGame[];
  games: IGame[];
  filteredGames: IGame[];
  loading: boolean;
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
