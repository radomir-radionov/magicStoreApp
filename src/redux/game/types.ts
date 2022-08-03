import { IGame } from "../../types/game";

export interface IGameState {
  topGames: IGame[];
  searchedGames: IGame[];
  games: IGame[];
  filteredGames: IGame[];
  loading: boolean;
}

export interface IChangedUserData {
  userId: string;
  newName: string;
  newDescription: string;
}

export interface ISetGameInCartPayload {
  id: string;
  game: IGame;
}

export interface IRemoveGameInCartPayload {
  id: string;
  game: IGame;
}

export interface IUpdateCartDataPayload {
  id: string;
  cartGames: IGame[];
}
