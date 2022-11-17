import { IUser } from "types/user";

export interface IAuthResponse {
  userData: IUserData;
  message: string;
}

export interface IUserData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
  message?: string;
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
