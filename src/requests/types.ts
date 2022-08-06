export interface IGetUserCartGamesRequest {
  id: string;
}

export interface IGetFilteredGames {
  age: string | undefined;
  criteria: string | undefined;
  genre: string | undefined;
  platform: string | undefined;
  searchText: string | undefined;
}
