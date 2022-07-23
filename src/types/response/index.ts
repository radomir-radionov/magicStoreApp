import { IUser } from "types/user";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
