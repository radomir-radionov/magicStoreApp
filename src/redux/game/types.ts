import { IGame } from "./../../types/game/game";

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
