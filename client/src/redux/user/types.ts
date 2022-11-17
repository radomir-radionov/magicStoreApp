import { IUser } from "types/user";
import { IGame } from "types/game";

export interface IUserState {
  isAuth: boolean;
  userData: IUser;
  isLoading: boolean;
  isDataChangedOnServer: boolean;
  error: {
    isError: boolean;
    status: string | null;
  };
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IChangeUserData {
  userId: string;
  newName: string;
  newDescription: string;
}

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

export interface INewCartData {
  id: string;
  cartGames: IGame[];
}
