import { IUser } from "types/user";

export interface IAuthResponse {
  data: IAuthDataResponse;
}

export interface IAuthDataResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
