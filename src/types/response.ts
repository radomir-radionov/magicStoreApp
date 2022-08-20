import { IUser } from "types/user";

export interface IAuthResponse {
  userData: IAuthDataResponse;
  message: string;
}

export interface IAuthDataResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
  message?: string;
}
