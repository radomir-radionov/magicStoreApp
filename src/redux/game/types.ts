import { IGame } from "../../types/game";

export interface IGameState {
  topGames: IGame[];
  searchedGames: IGame[];
  games: IGame[];
  filteredGames: IGame[];
  loading: boolean;
}

export interface IChangeUserData {
  userId: string;
  newName: string;
  newDescription: string;
}
