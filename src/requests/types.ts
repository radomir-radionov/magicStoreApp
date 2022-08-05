export interface IGetUserCartGamesRequest {
  id: string;
}

export interface IGetFilteredGamesRequest {
  age: string | undefined;
  criteria: string | undefined;
  genre: string | undefined;
  platform: string | undefined;
  searchText: string | undefined;
}
