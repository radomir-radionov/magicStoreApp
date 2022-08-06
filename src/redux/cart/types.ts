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

export interface ISetGameInCart {
  id: string;
  game: IGame;
}

export interface IRemoveGameInCart {
  id: string;
  game: IGame;
}

export interface IUpdateCartData {
  id: string;
  cartGames: IGame[];
}
