import { IGame } from "types/game";

export interface ICartState {
  cart: IGame[];
  isLoading: boolean;
  error: {
    isError: boolean;
    status: string | null;
  };
}

export interface IGetUserCartGames {
  id: string;
}

export interface IPutGameInCartData {
  id: string;
  game: IGame;
}

export interface IDeleteGameCartData {
  id: string;
  game: IGame;
}

export interface INewDataCartData {
  id: string;
  cartGames: IGame[];
}
