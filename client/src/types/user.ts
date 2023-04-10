import { IGame } from "./game";

export interface IUser {
  id: string;
  role: string;
  email: string;
  name: string;
  description: string;
  avatar: any;
  cart: any;
  img: any;
}

export interface IChangeUserData {
  id: string;
}
