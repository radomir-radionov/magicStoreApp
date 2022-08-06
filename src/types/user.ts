import { IGame } from "./game";

export interface IUser {
  id: string;
  role: string;
  email: string;
  name: string;
  description: string;
  cart: IGame[];
}

export interface ISignUpData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IChangeUserData {
  id: string;
}
