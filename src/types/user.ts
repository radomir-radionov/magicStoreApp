import { IGame } from "./game";

export interface IUser {
  id: string;
  role: string;
  email: string;
  name: string;
  description: string;
  avatar: any;
  cart: IGame[];
}

export interface ISignUpData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IChangeUserData {
  id: string;
}
