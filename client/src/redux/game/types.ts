import { IGame } from "../../types/game";

export interface IGameState {
  games: IGame[];
  gamesApi: any;
  gameInfo: any;
  topGames: IGame[];
  searchedGames: IGame[];
  filteredGames: IGame[];
  loading: boolean;
}

export interface IChangeUserData {
  userId: string;
  newName: string;
  newDescription: string;
}
